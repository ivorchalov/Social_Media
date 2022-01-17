import React from "react";

const ShareOption = (props) => {
    return (
        <div className="flex items-center cursor-pointer">
            {props.icon}
            <span className="text-sm mr-2">{props.text}</span>
        </div>
    );
}

export default ShareOption