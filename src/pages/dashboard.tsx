import { Users, UserRound, ShoppingBag, ShoppingCart } from "lucide-react"

import StatCard from "../components/statCard.js"
import { ChartMain } from "../components/chartMain.js"

export default function Dashboard() {
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl text-zinc-800 font-bold">Dashboard</h1>

      <section className="w-full flex gap-10 pt-5">
        <StatCard
          icon={<UserRound size={26} />}
          backgroundIcon={<UserRound size={220} />}
          label="Total utilisateurs"
          value={254}
        />

        <StatCard
          icon={<Users size={26} />}
          backgroundIcon={<Users size={220} />}
          label="Utilisateurs actifs"
          value={120}
        />
        <StatCard
          icon={<ShoppingBag size={26} />}
          backgroundIcon={<ShoppingBag size={220} />}
          label="Total article"
          value={120}
        />
        <StatCard
          icon={<ShoppingCart size={26} />}
          backgroundIcon={<ShoppingCart size={220} />}
          label="Total article vendu"
          value={120}
        />
      </section>

      <div className="w-full pt-10">
        <ChartMain/>
      </div>
    </div>
  )
}