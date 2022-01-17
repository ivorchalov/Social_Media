import React from "react";
import { PhotographIcon, TagIcon, LocationMarkerIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import ShareOption from "./ShareOption";

const Share = () => {
    const Options = [
        {
            icon: <PhotographIcon className="w-10 h-10"/>,
            text: 'Photo or Video'
        },
        {
            icon: <TagIcon className="w-10 h-10"/>,
            text: 'Tag'
        },
        {
            icon: <LocationMarkerIcon className="w-10 h-10"/>,
            text: 'Location'
        },
        {
            icon: <EmojiHappyIcon className="w-10 h-10"/>,
            text: 'Feelings'
        }
    ];

    return(
        <div className="h-40 rounded-2xl shadow-xl">
            <div className="p-3">
                <div className="flex items-center">
                    <img src="/assets/people/p1.jpg" alt="" className="w-12 h-12 rounded-3xl object-cover mr-3"/>
                    <input placeholder="What is in your mind?" className="w-11/12 border-0 focus:outline-0"/>
                </div>
                <hr className="my-4 mx-2"/>
                <div className="flex items-center justify-between">
                    <div className="flex m-1">
                        {Options.map((option) => (
                            <ShareOption icon={option.icon} text={option.text}/>
                        ))}
                    </div>
                    <button className="border-0 p-2 cursor-pointer text-neutral-50 mr-8 rounded-2xl bg-lime-500 w-20">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share