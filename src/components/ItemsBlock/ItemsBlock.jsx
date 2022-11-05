import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

function ItemsBlock(props) {
    const { name, title, viewAllLink, items, itemsInProgress, itemInstance } =
        props;

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {!itemsInProgress && items && items.entities && (
                <div className={`items-block ${name}-block`}>
                    {title && viewAllLink && (
                        <div
                            className={`items__title items-title ${name}__title`}
                            onClick={() => dispatch(push(viewAllLink))}
                        >
                            <div className="items-title__label">{title}</div>
                            <div className="items-title__link">View all</div>
                        </div>
                    )}
                    {title && !viewAllLink && (
                        <div
                            className={`items__title items-title ${name}__title`}
                        >
                            <div className="items-title__label">{title}</div>
                        </div>
                    )}
                    <div className={`items__entities ${name}__entities`}>
                        {items.entities.map((entity) => (
                            <div
                                key={entity.id}
                                className={`items__entity ${name}__entity`}
                            >
                                {itemInstance(entity)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
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
    itemsInProgress: PropTypes.bool,
    itemInstance: PropTypes.func,
};

export default ItemsBlock;
