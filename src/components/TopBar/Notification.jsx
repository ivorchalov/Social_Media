import React from "react";

const Notification = (props) => {
    return (
        <div className="relative mr-3.5 cursor-pointer">
            {props.icon}
            <span className="w-4 h-4 rounded-2xl text-neutral-50 absolute -top-1 -right-1 text-xs bg-red-500 flex items-center justify-center">{props.value}</span>
        </div>
    );
}

export default Notification