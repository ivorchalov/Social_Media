import React from "react";
import Share from "../Share/Share";
import Post from "../Post/Post";
import {Posts} from "../../someData";

const Feed = () => {
    return(
        <div className="w-1/2">
            <div className="p-8">
                <Share/>
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed