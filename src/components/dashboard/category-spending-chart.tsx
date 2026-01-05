"use client"

import * as React from "react"
import { Pie, PieChart, Cell, Tooltip } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Transaction } from "@/types"
import { formatCurrency } from "@/lib/utils"

const chartColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function CategorySpendingChart({ transactions }: { transactions: Transaction[] }) {
  const chartData = React.useMemo(() => {
    const categoryTotals: { [key: string]: number } = {}
    transactions
      .filter((t) => t.type === "expense" && t.category)
      .forEach((t) => {
        if (t.category) {
          categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount
        }
      })
    return Object.entries(categoryTotals)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [transactions])

  const chartConfig = React.useMemo(() => {
    return chartData.reduce((acc, item, index) => {
      acc[item.name] = {
        label: item.name,
        color: chartColors[index % chartColors.length],
      }
      return acc
    }, {} as any)
  }, [chartData]);


  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Top Spending Categories</CardTitle>
        <CardDescription>This month's spending by category.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[250px]"
        >
          <PieChart>
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel formatter={(value) => formatCurrency(value as number)} />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
