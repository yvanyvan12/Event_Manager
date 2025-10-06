import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Register" element={<RegisterPage />} />
                    <Route path="/Login"element={<LoginPage/>} />
                    {/* Add more pages later */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
