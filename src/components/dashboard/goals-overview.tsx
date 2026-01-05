import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Goal } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { Target } from "lucide-react";

export function GoalsOverview({ goals }: { goals: Goal[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Goals</CardTitle>
        <CardDescription>Your progress towards your savings goals.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map(goal => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            return (
              <div key={goal.id}>
                <div className="flex justify-between mb-1 items-center">
                    <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{goal.name}</span>
                    </div>
                  <span className="text-sm text-muted-foreground">
                    {formatCurrency(goal.currentAmount)} / {formatCurrency(goal.targetAmount)}
                  </span>
                </div>
                <Progress value={progress} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
