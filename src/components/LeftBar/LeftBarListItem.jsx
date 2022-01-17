import React from "react";

const LeftBarListItem = (props) => {
    return (
        <li className="flex items-center mb-7 cursor-pointer">
            {props.icon}
            <span className="flex items-center ml-4">{props.text}</span>
        </li>
    );
}

export default LeftBarListItem