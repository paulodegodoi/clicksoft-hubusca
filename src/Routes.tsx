import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

const ProjectRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
    </Router>
);

export default ProjectRouter;