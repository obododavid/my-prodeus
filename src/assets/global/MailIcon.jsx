import React from "react";

const MailIcon = ({ type }) => {
    const renderIcon = () => {
        switch (type) {
            case "plain":
                return (
                    <svg
                        id="Group_7368"
                        data-name="Group 7368"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.58"
                        height="13.965"
                        viewBox="0 0 20.58 13.965"
                    >
                        <path
                            id="Path_14152"
                            data-name="Path 14152"
                            d="M20.742,6.5H3.838A1.839,1.839,0,0,0,2,8.337v10.29a1.839,1.839,0,0,0,1.838,1.838h16.9a1.839,1.839,0,0,0,1.838-1.838V8.337A1.839,1.839,0,0,0,20.742,6.5Zm-8.2,8.324a.365.365,0,0,1-.5,0L4.615,7.97h15.35Zm-4.368-1.57-4.7,4.7V8.914Zm1.081,1,1.791,1.654a1.848,1.848,0,0,0,2.492,0l1.79-1.653,4.744,4.744H4.509Zm7.155-1,4.7-4.34v9.042Z"
                            transform="translate(-2 -6.5)"
                            fill="#b4b4c9"
                        />
                    </svg>
                );
        }
    };
    return <>{renderIcon()}</>;
};

export default MailIcon;
