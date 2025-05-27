import React from "react";
import { Outlet } from "react-router";
import AuthContextProvider from "../context/AuthContextProvider";

const MainLayout = () => {
    return (
        <AuthContextProvider>
            <div>MainLayout</div>
            <Outlet />
        </AuthContextProvider>
    );
};

export default MainLayout;
