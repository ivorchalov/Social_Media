import React from "react";
import {Users} from "../../someData";
import {useState} from "react";
import { HeartIcon, DotsVerticalIcon } from '@heroicons/react/outline';

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isliked, setIsLiked] = useState(false)
    
    const LikeHandler = () => {
      setLike(isliked ? like-1 : like+1);
      setIsLiked(!isliked);
    }

    return(
        <div className="rounded-xl mx-1 my-0 shadow-xl">
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt="" className="w-8 h-8 rounded-3xl object-cover"/>
                        <span className="my-3 mx-3">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="text-xs">{post.date}</span>
                    </div>
                    <div>
                        <DotsVerticalIcon className="w-6 h-7"/>
                    </div>
                </div>
                <div className="mx-0 my-3">
                    <span className="text-base">{post?.desc}</span>
                    <img className="mt-5 ml-16 h-4/6 object-contain w-5/6 rounded" src={post.photo} alt="" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <HeartIcon className="w-8 h-8 mr-2 cursor-pointer" onClick={LikeHandler}/>
                        <span className="text-sm">{like} people like it</span>
                    </div>
                    <div>
                        <span className="cursor-pointer text-sm"><u>{post.comment} comments</u></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post