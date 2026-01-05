"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Transaction } from "@/types"
import { formatCurrency } from "@/lib/utils"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import { useMemo } from "react"
import { format, subDays, startOfDay } from "date-fns"

const chartConfig = {
  spending: {
    label: "Spending",
    color: "hsl(var(--primary))",
  },
}

export function SpendingOverviewChart({ transactions }: { transactions: Transaction[] }) {
  const chartData = useMemo(() => {
    const expenses = transactions.filter(t => t.type === 'expense');
    const days = Array.from({ length: 30 }, (_, i) => subDays(startOfDay(new Date()), i)).reverse();

    return days.map(day => {
      const dailyTotal = expenses
        .filter(t => format(new Date(t.date), 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'))
        .reduce((sum, t) => sum + t.amount, 0);
      
      return {
        date: format(day, "MMM d"),
        spending: dailyTotal,
      };
    });
  }, [transactions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Overview</CardTitle>
        <CardDescription>Your spending over the last 30 days.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickFormatter={(value) => formatCurrency(value as number).replace('.00', '')}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => formatCurrency(value as number)}
                  indicator="dot"
                />
              }
            />
            <Line
              dataKey="spending"
              type="monotone"
              stroke={chartConfig.spending.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
