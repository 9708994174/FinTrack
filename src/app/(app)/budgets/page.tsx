import { budgets, transactions } from "@/lib/data"
import { BudgetList } from "@/components/budgets/budget-list"
import { EditBudgetDialog } from "@/components/budgets/edit-budget-dialog"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function BudgetsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Budgets</h1>
            <p className="text-muted-foreground">Manage your monthly spending limits.</p>
        </div>
        <EditBudgetDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Set Budget
          </Button>
        </EditBudgetDialog>
      </div>
      <BudgetList budgets={budgets} transactions={transactions} />
    </div>
  )
}
