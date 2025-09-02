import SideBar from "../components/sidebar.js"
import { Outlet } from "react-router-dom"

export default function dashboardLayout() {
    return(
        <div className="flex w-full h-full">
            <SideBar />
            <main className="flex-1 p-6 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}