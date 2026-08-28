import React from 'react';

export type ArrowProps = {
    color?: 'dark' | 'light';
    size?: 'md' | 'lg';
};

const Arrow = ({ color = 'light', size }: ArrowProps): React.ReactElement => {
    let strokeColor = 'stroke-light';
    if (color === 'dark') strokeColor = 'stroke-dark';

    if (size === 'lg') {
        return (
            <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line
                    x1="17.2403"
                    y1="1.30711"
                    x2="0.708154"
                    y2="17.8393"
                    className={strokeColor}
                    strokeWidth="2"
                />
                <line
                    x1="17.5371"
                    y1="13"
                    x2="17.5371"
                    y2="1"
                    className={strokeColor}
                    strokeWidth="2"
                />
                <line
                    x1="6.53711"
                    y1="1"
                    x2="18.5371"
                    y2="1"
                    className={strokeColor}
                    strokeWidth="2"
                />
            </svg>
        );
    }

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
                className={strokeColor}
            />
            <line
                x1="9.25391"
                y1="8.00049"
                x2="9.25391"
                y2="0.000488281"
                className={strokeColor}
            />
            <line
                x1="1.75391"
                y1="0.5"
                x2="9.75391"
                y2="0.5"
                className={strokeColor}
            />
        </svg>
    );
};

export default Arrow;
