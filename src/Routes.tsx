import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import UserInfo from "./pages/UserInfo"
import Historic from "./pages/Historic"

const ProjectRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/historic" element={<Historic />} />
        </Routes>
    </Router>
)

export default ProjectRouter