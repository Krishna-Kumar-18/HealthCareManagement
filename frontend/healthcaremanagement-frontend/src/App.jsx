import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>

                <Route path="/login" element={<Login />}/>

                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;