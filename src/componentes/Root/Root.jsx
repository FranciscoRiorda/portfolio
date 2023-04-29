import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import WhatsApp from "../WhatsApp/WhatsApp";

const Root = () => {
  return (
    <>
      {/* <WhatsApp /> */}
      <SideBar />
      <Outlet />
    </>
  );
};

export default Root;
