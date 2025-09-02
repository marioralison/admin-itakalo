import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Users, ShoppingCart, BarChart3, MessageCircleMore, Bell, LogOut } from "lucide-react"
import { Button } from "../../components/ui/button.js"

import Alert from "./alert.js"

export default function SideBar() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const logOut = () => {
    navigate("/")
  }

  const menuItems = [
    { name: "Dashboard", icon: <BarChart3 size={22} />, path: "/dashboard" },
    { name: "Utilisateurs", icon: <Users size={22} />, path: "/dashboard/users" },
    { name: "Articles", icon: <ShoppingCart size={22} />, path: "/dashboard/articles" },
    { name: "Message", icon: <MessageCircleMore size={22} />, path: "/dashboard/messages" },
    { name: "Notification", icon: <Bell size={22} />, path: "/dashboard/notifications" },
  ]

  return (
    <aside className="w-70 h-full px-6 bg-white border-r flex flex-col">
      <div className="p-6 pt-7 text-2xl font-bold text-zinc-900">
        <h1 className="text-5xl">Admin iTakalo</h1>
      </div>

      <nav className="flex-1 flex flex-col gap-2 p-2 pt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-md font-medium transition-colors
              ${location.pathname === item.path
                ? "bg-primary text-black"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-black-900"}`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="w-full flex flex-col justify-center items-center gap-10 text-sm text-zinc-500">
        <Alert
            trigger={
            <Button className="w-full flex items-center gap-3 px-4 py-4 rounded-lg text-md font-medium transition-colors bg-transparent text-black text-zinc-600 hover:bg-zinc-800 hover:text-white shadow-none">
                <LogOut size={22} />
                Déconnexion
            </Button>
            }
            title="Voulez-vous vraiment vous déconnecter ?"
            description="Cette action vous déconnectera et vous redirigera vers la page de connexion."
            onConfirm={() => navigate("/")}
        />
        <p className="p-4 border-t">© 2025 I-Takalo</p>
      </div>
    </aside>
  )
}
