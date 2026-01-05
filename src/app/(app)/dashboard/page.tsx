import { transactions, budgets, goals } from "@/lib/data"
import { SummaryCard } from "@/components/dashboard/summary-card"
import { SpendingOverviewChart } from "@/components/dashboard/spending-overview-chart"
import { CategorySpendingChart } from "@/components/dashboard/category-spending-chart"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { BudgetOverview } from "@/components/dashboard/budget-overview"
import { GoalsOverview } from "@/components/dashboard/goals-overview"
import { formatCurrency } from "@/lib/utils"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

export default function DashboardPage() {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)
    
  const netBalance = totalIncome - totalExpenses

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Total Spending"
          value={formatCurrency(totalExpenses)}
          icon={TrendingDown}
          description="Total expenses this month"
        />
        <SummaryCard
          title="Total Income"
          value={formatCurrency(totalIncome)}
          icon={TrendingUp}
          description="Total income this month"
        />
        <SummaryCard
          title="Net Balance"
          value={formatCurrency(netBalance)}
          icon={DollarSign}
          description={netBalance >= 0 ? "You're in the green!" : "You've spent more than you earned"}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SpendingOverviewChart transactions={transactions} />
        </div>
        <div>
          <CategorySpendingChart transactions={transactions} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <RecentTransactions transactions={transactions} />
        <BudgetOverview budgets={budgets} transactions={transactions} />
      </div>

      <GoalsOverview goals={goals} />

    </div>
  )
}
