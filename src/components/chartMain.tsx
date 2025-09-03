"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.js"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart.js"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "January", sell: 186, buy: 80, gift: 75 },
  { month: "February", sell: 305, buy: 200, gift: 125},
  { month: "March", sell: 237, buy: 120, gift: 200},
  { month: "April", sell: 73, buy: 190, gift: 147},
  { month: "May", sell: 209, buy: 130, gift: 300},
  { month: "June", sell: 214, buy: 140, gift: 160},
]

const chartConfig = {
  sell: {
    label: "Ventes",
    color: "var(--chart-3)",
  },
  buy: {
    label: "Achats",
    color: "var(--chart-4)",
  },
  gift: {
    label: "Dons",
    color: "var(--chart-2)",
  }
} satisfies ChartConfig

export function ChartMain() {
  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle>Graphiques des activitées semestrielles</CardTitle>
        <CardDescription>
          Affichage total ventes et achats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-110 w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillSell" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sell)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sell)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBuy" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-buy)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-buy)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillGift" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-gift)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-gift)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="buy"
              type="natural"
              fill="url(#fillBuy)"
              fillOpacity={0.4}
              stroke="var(--color-buy)"
              stackId="a"
            />
            <Area
              dataKey="sell"
              type="natural"
              fill="url(#fillSell)"
              fillOpacity={0.4}
              stroke="var(--color-sell)"
              stackId="a"
            />
            <Area
              dataKey="gift"
              type="natural"
              fill="url(#fillGift)"
              fillOpacity={0.4}
              stroke="var(--color-gift)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
