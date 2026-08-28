import React from 'react';

export type ArrowProps = {};

const Arrow = ({}: ArrowProps): React.ReactElement => {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
                x1="9.10746"
                y1="0.734047"
                x2="0.353478"
                y2="9.48803"
                stroke="#F5F2EC"
            />
            <line
                x1="9.25391"
                y1="8.00049"
                x2="9.25391"
                y2="0.000488281"
                stroke="#F5F2EC"
            />
            <line
                x1="1.75391"
                y1="0.5"
                x2="9.75391"
                y2="0.5"
                stroke="#F5F2EC"
            />
        </svg>
    );
};

export default Arrow;
