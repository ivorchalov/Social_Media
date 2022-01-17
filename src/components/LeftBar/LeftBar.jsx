import React from "react";
import {Users} from "../../someData";
import CloseFriends from "../closeFriends/closeFriends";
import { BookmarkIcon, ChatIcon, FilmIcon, HomeIcon, UsersIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import LeftBarListItem from "./LeftBarListItem";
import './leftbar.css';

const LeftBar = () => {
    const Links =[
        {
            icon: <HomeIcon className="h-6 w-6"/>,
            text: 'Feed'
        },
        {
            icon: <ChatIcon className="h-6 w-6"/>,
            text: 'Chat'
        },
        {
            icon: <FilmIcon className="h-6 w-6"/>,
            text: 'Videos'
        },
        {
            icon: <UsersIcon className="h-6 w-6"/>,
            text: 'Groups'
        },
        {
            icon: <BookmarkIcon className="h-6 w-6"/>,
            text: 'Bookmarks'
        },
        {
            icon: <QuestionMarkCircleIcon className="h-6 w-6"/>,
            text: 'Questions'
        }
    ];

    return(
        <div className="w-1/5 overflow-y-scroll	sticky overflow-hidden">
            <div className="p-6">
                <ul className="p-0 m-0 list-none">
                    {Links.map((link) => (
                        <LeftBarListItem icon={link.icon} text={link.text}/>
                    ))}
                </ul>
                <button className="border-0 w-5/12 rounded-lg bg-slate-200 h-9">Show More</button>
                <hr className="my-6 mx-0"/>
                <ul className="p-0 m-0">
                    {Users.map((u)=>(
                        <CloseFriends key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LeftBar