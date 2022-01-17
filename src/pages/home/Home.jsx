import React from "react";
import "./home.css";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/Rightbar/RightBar";

export default function Home(){
    return(
        <>
            <TopBar/>
            <div className="homeContainer">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>
        </>
    )
}