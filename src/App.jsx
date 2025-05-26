import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="event" element={<EventPage />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
