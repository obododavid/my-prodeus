import React from "react";

const KeyIcon = ({ type }) => {
    const renderIcon = () => {
        switch (type) {
            case "plain":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.561" height="18.56" viewBox="0 0 18.561 18.56">
                        <g id="Group_7366" data-name="Group 7366" transform="translate(0.311 0.25)">
                            <path
                                id="Path_14150"
                                data-name="Path 14150"
                                d="M12.75,0a5.25,5.25,0,0,0-4.2,8.394l-3.45,3.45h0l-2.25,2.25h0L.219,16.72A.75.75,0,1,0,1.28,17.78l2.095-2.095L5.47,17.78A.75.75,0,0,0,6.53,16.72L4.436,14.625l1.189-1.189L6.97,14.78A.75.75,0,0,0,8.03,13.72L6.686,12.375l2.92-2.92A5.25,5.25,0,1,0,12.75,0Zm0,9A3.738,3.738,0,0,1,10.1,7.907L10.1,7.9,10.093,7.9A3.75,3.75,0,1,1,12.75,9Z"
                                transform="translate(0)"
                                fill="#b4b4c9"
                                stroke="#b4b4c9"
                                strokeWidth="0.5"
                            />
                        </g>
                    </svg>
                );
        }
    };
    return <>{renderIcon()}</>;
};

export default KeyIcon;
