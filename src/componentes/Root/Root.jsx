import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Root = () => {

    return(
        <>
            <SideBar/>
            <Outlet/>
        </>
    )
}

export default Root;