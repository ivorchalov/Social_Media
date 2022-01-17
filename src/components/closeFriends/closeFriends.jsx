import React from "react";

const CloseFriends = ({user}) => {
    return(
        <li className="flex items-center mb-5">
            <img src={user.profilePicture} alt="" className="h-10 w-10 rounded-3xl cursor-pointer object-cover"/>
            <span className="ml-3">{user.username}</span>
        </li>
    )
}

export default CloseFriends