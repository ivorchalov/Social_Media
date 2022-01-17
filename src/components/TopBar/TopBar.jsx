import React from "react";
import { SearchIcon, UserIcon, MailIcon, BellIcon } from '@heroicons/react/outline';
import Notification from "./Notification";
import TopBarLink from "./TopBarLink";

const TopBar = () =>{
    const Notifications =[
        {
            icon: <UserIcon className="h-6 w-6"/>,
            value: 5
        },
        {
            icon: <MailIcon className="h-6 w-6"/>,
            value: 17
        },
        {
            icon: <BellIcon className="h-6 w-6"/>,
            value: 3
        }
    ];

    return(
        <div className = "h-10 flex items-center sticky top-0 bg-blue-600 columns-3 z-50">
            <div className="w-1/5">
                <span className="text-3xl text-neutral-50 ml-2 cursor-pointer">Social Media</span>
            </div>
            <div className="w-1/2">
                <div className="h-8 bg-white flex items-center rounded-xl">
                    <SearchIcon className="h-6 w-6 ml-1"/>
                    <input placeholder="Search for " className="w-11/12 border-0 ml-2 focus:outline-0"/>
                </div>
            </div>
            <div className="w-1/5 flex items-center justify-between text-neutral-50 ml-5">
                <div>
                    <TopBarLink value={'Homepage'}/>
                    <TopBarLink value={'Timeline'}/>
                </div>
                <div className="flex">
                    {Notifications.map((notifs) => (
                        <Notification icon={notifs.icon} value={notifs.value}/>
                    ))}
                </div>
                <img src="/assets/people/p1.jpg" alt="" className="h-8 w-8 rounded-3xl cursor-pointer object-cover"/>
            </div>
        </div>
    )
}

export default TopBar