import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentification from "../pages/authentification.js";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Authentification />}/>
            </Routes>
        </BrowserRouter>
    )
}