import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentification from "../pages/authentification.js";
import DashboardLayout from "../layouts/dashboardLayout.js";

//children routes
import Messages from "../pages/messages.js";
import Notification from "../pages/notifications.js";
import User from "../pages/users.js";
import Dashboard from "../pages/dashboard.js";
import Article from "../pages/articles.js";
import Gift from "../pages/gift.js";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Authentification />}/>

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<User />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="notifications" element={<Notification />} />
                    <Route path="articles" element={<Article />} />
                    <Route path="gifts" element={<Gift />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}