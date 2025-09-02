import SideBar from "../components/sidebar.js"
import { Outlet } from "react-router-dom"

export default function dashboardLayout() {
    return(
        <div className="flex w-full h-full">
            <SideBar />
            <main className="flex-1 px-14 py-10 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}