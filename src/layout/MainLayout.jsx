import React from "react";
import { Outlet } from "react-router";
import AuthContextProvider from "../context/AuthContextProvider";

const MainLayout = () => {
    return (
        <AuthContextProvider>
            <Outlet />
        </AuthContextProvider>
    );
};

export default MainLayout;
