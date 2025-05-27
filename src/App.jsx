import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import EventBoard from "./components/EventBoard";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        {/* <Route path="events/:eventId" element={<EventPage />} /> */}
                        <Route path="events/:eventId" element={<EventPage />} />
                        <Route path="eventboard" element={<EventBoard />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="signin" element={<SignIn />} />{" "}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
