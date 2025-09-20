import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

interface AppRoutesProps {
    isAuthenticated: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated }) => {
    return (
    <Routes>
        {isAuthenticated ? (
        <>
            <Route path="*" element={<Navigate to="/login" replace />} />
        </>
        ) : (
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </>
        )}
    </Routes>
    );
};

export default AppRoutes;
