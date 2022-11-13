import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import { isFunction, locate } from '../../utils/functions';

function ItemsBlock(props) {
    const {
        name,
        title,
        viewAllLink,
        items,
        itemInstance,
        itemLoader,
        loadersCount,
        needInfiniteScroll,
        infiniteScrollCallback,
    } = props;

    const [cT, setCT] = useState(items);

    const [isFetching, setIsFetching] = (needInfiniteScroll &&
        useInfiniteScroll(() => {
            if (!isFetching) {
                if (isFunction(infiniteScrollCallback)) {
                    infiniteScrollCallback();
                }
            }
            if (cT) {
                setCT(() => ({
                    count: cT.count + 5,
                    entities: [...cT.entities, ...cT.entities.slice(-5)],
                }));
            }
            setIsFetching(false);
        })) || [false, () => {}];

    useEffect(() => {
        if (!items) {
            setIsFetching(true);
        } else {
            setCT(items);
        }
    }, [items]);

    return (
        <React.Fragment>
            <div className={`items-block ${name}-block`}>
                {title && viewAllLink && (
                    <div
                        className={`items__title items-title ${name}__title`}
                        onClick={() => locate(viewAllLink)}
                    >
                        <div className="items-title__label">{title}</div>
                        <div className="items-title__link">View all</div>
                    </div>
                )}
                {title && !viewAllLink && (
                    <div className={`items__title items-title ${name}__title`}>
                        <div className="items-title__label">{title}</div>
                    </div>
                )}
                <div className={`items__entities ${name}__entities`}>
                    {!cT &&
                        loadersCount &&
                        isFunction(itemLoader) &&
                        [...Array(loadersCount)].map((_, i) => (
                            <div key={i} className="items-block__entity-loader">
                                {itemLoader()}
                            </div>
                        ))}
                    {cT &&
                        cT.entities.map((entity) => (
                            <div
                                key={entity.id}
                                className={`items__entity ${name}__entity`}
                            >
                                {itemInstance(entity)}
                            </div>
                        ))}
                </div>
                {needInfiniteScroll &&
                    isFetching &&
                    loadersCount &&
                    isFunction(itemLoader) &&
                    [...Array(loadersCount)].map((_, i) => (
                        <div key={i} className="items-block__entity-loader">
                            {itemLoader()}
                        </div>
                    ))}
            </div>
        </React.Fragment>
    );
}

ItemsBlock.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    viewAllLink: PropTypes.string,
    items: PropTypes.shape({
        count: PropTypes.number,
        entities: PropTypes.array,
    }),
    itemInstance: PropTypes.func,
    itemLoader: PropTypes.func,
    loadersCount: PropTypes.number,
    needInfiniteScroll: PropTypes.bool,
    infiniteScrollCallback: PropTypes.func,
};

export default ItemsBlock;
