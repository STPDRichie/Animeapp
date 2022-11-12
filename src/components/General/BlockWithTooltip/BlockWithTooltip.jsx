import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

function BlockWithTooltip(props) {
    const {
        type = 'dark',
        tooltipId,
        tooltipPlace = 'bottom',
        tooltipEffect = 'solid',
        tooltipOffset,
        tooltipDelayHide = 100,
        tooltipDelayShow = 100,
        tooltipChidren,
        className,
        children,
        clickable,
    } = props;

    const tooltipClassNames = ['custom-tooltip'];
    if (className) {
        tooltipClassNames.push(className);
    }

    return (
        <React.Fragment>
            {children}
            {tooltipChidren && (
                <ReactTooltip
                    clickable={clickable}
                    type={type}
                    place={tooltipPlace}
                    offset={tooltipOffset}
                    effect={tooltipEffect}
                    delayHide={tooltipDelayHide}
                    delayShow={tooltipDelayShow}
                    id={tooltipId}
                    className={tooltipClassNames.join(' ')}
                >
                    {tooltipChidren}
                </ReactTooltip>
            )}
        </React.Fragment>
    );
}

BlockWithTooltip.propTypes = {
    type: PropTypes.string,
    tooltipId: PropTypes.string.isRequired,
    tooltipPlace: PropTypes.string,
    tooltipEffect: PropTypes.string,
    tooltipOffset: PropTypes.shape({}),
    tooltipDelayHide: PropTypes.number,
    tooltipDelayShow: PropTypes.number,
    tooltipChidren: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    children: PropTypes.element,
    clickable: PropTypes.bool,
};

export default BlockWithTooltip;
