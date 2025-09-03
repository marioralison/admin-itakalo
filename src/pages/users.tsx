import { useEffect, useState } from "react"
import { columns } from "../users/columns.js"
import type { Payment } from "../users/columns.js"
import { DataTable } from "../users/data-table.js"

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ]
}

export default function User() {
  const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      console.log("👉 result", result)
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div className="w-full h-full border border-black">
      <h1 className="text-4xl text-zinc-800 font-bold">Utilisateurs</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
