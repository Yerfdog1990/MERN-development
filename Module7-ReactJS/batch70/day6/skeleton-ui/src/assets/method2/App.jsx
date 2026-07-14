import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css"; // required stylesheet
import { SkeletonTheme } from "react-loading-skeleton";
import UserDetailsPage from "./UserDetailsPage.jsx";
import UsersPage from "./UsersPage.jsx";

const SkeletonApp = () => {
    return (
        <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
            <Router>
                <Routes>
                    <Route path="/" element={<UsersPage />} />
                    <Route path="/user/:id" element={<UserDetailsPage />} />
                </Routes>
            </Router>
        </SkeletonTheme>
    );
};

export default SkeletonApp;