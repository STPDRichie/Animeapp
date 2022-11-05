import React from 'react';
import PropTypes from 'prop-types';

function ItemsBlock(props) {
    const { name, title, items, itemsInProgress, itemInstance } = props;

    return (
        <React.Fragment>
            {!itemsInProgress && items && items.entities && (
                <div className={`items-block ${name}-block`}>
                    <div className={`items__title ${name}__title`}>{title}</div>
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
    items: PropTypes.shape({
        count: PropTypes.number,
        entities: PropTypes.array,
    }),
    itemsInProgress: PropTypes.bool,
    itemInstance: PropTypes.func,
};

export default ItemsBlock;
