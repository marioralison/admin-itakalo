import React from "react";

interface StatCardProps {
  icon: React.ReactNode;     
  value: string | number;    
  label: string;         
  backgroundIcon?: React.ReactNode;
}

export default function StatCard({ icon, value, label, backgroundIcon }: StatCardProps) {
  return (
    <article className="relative flex flex-col justify-start items-start h-50 w-full bg-white shadow-xl border border-zinc-100 rounded-3xl p-5 overflow-hidden">
      
      {backgroundIcon && (
        <div className="absolute bottom-[-1] right-0 opacity-3 pointer-events-none select-none">
          {backgroundIcon}
        </div>
      )}

      <div className="flex items-center justify-start gap-3 relative z-10">
        <div className={`p-3 w-fit h-fit bg-primary rounded-full`}>
          {icon}
        </div>
        <h3 className="text-md text-zinc-400">{label}</h3>
      </div>

      <div className="h-full w-full flex justify-start items-center relative z-10">
        <h1 className="text-6xl text-zinc-800 font-semibold">{value}</h1>
      </div>

    </article>
  )
}
