import React from "react";
import {Users} from "../../someData";
import Online from "../Online/Online";

const RightBar = () => {
    return(
        <div className="pt-5 pr-5">
            <div className="flex items-center">
                <img className="w-10 h-10" src="assets/gift.png" alt="" />
                <span className="text-l">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
                </span>
            </div>
            <img className="w-5/6 rounded-xl mb-10 mt-10" src="assets/ad.png" alt="" />
            <h4 className="mb-8 text-xl">Online Friends</h4>
            <ul className="p-0 m-0">
                {Users.map((u) => (
                  u.onlineStatus ? <Online key={u.id} user={u} /> : <></>
                ))}
            </ul>
        </div>
    )
}

export default RightBar