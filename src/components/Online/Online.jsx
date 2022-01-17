import React from "react";

const Online = ({user}) => {
    return (
        <li className="flex items-center mb-5">
            <div className="relative mr-4">
                <img className="w-10 h-10 rounded-3xl cursor-pointer object-cover" src={user.profilePicture} alt="" />
                <span className="w-3 h-3 rounded-3xl absolute bg-lime-400 right-0 top-0"></span>
            </div>
            <span className="text-base">{user.username}</span>
        </li>
    );
}

export default Online