import React from "react";
import { Outlet } from "react-router";
import AuthContextProvider from "../context/AuthContextProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <AuthContextProvider>
            <div className="min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </AuthContextProvider>
    );
};

export default MainLayout;
