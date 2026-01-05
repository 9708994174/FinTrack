import { goals } from "@/lib/data"
import { GoalList } from "@/components/goals/goal-list"
import { AddGoalDialog } from "@/components/goals/add-goal-dialog"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Financial Goals</h1>
            <p className="text-muted-foreground">Track your progress towards your savings goals.</p>
        </div>
        <AddGoalDialog>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Goal
          </Button>
        </AddGoalDialog>
      </div>
      <GoalList goals={goals} />
    </div>
  )
}
