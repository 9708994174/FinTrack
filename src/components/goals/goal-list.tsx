import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Goal } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { format, differenceInDays, formatDistanceToNow } from "date-fns";
import { Target } from "lucide-react";

export function GoalList({ goals }: { goals: Goal[] }) {
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {goals.map(goal => {
        const progress = (goal.currentAmount / goal.targetAmount) * 100;
        const deadline = new Date(goal.deadline);
        const daysLeft = differenceInDays(deadline, new Date());
        
        return (
          <Card key={goal.id}>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary"/>
                    <div>
                        <CardTitle>{goal.name}</CardTitle>
                        <CardDescription>Target: {formatCurrency(goal.targetAmount)}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
              <div className="mb-2 text-center text-xl font-bold text-primary">
                {formatCurrency(goal.currentAmount)}
              </div>
              <Progress value={progress} />
              <div className="flex justify-between mt-2 text-sm">
                <span className="font-medium">{Math.round(progress)}% Complete</span>
                <span className="text-muted-foreground">{formatCurrency(goal.targetAmount - goal.currentAmount)} to go</span>
              </div>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-muted-foreground w-full text-center">
                    Deadline: {format(deadline, "MMMM d, yyyy")} ({formatDistanceToNow(deadline, { addSuffix: true })})
                </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
