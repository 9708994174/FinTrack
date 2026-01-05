import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Budget, Transaction } from "@/types";
import { formatCurrency } from "@/lib/utils";

export function BudgetOverview({ budgets, transactions }: { budgets: Budget[], transactions: Transaction[] }) {
  const getSpendingForCategory = (category: string) => {
    return transactions
      .filter(t => t.type === 'expense' && t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Your spending vs. budget for this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {budgets.map(budget => {
            const spent = getSpendingForCategory(budget.category);
            const progress = (spent / budget.amount) * 100;
            return (
              <div key={budget.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{budget.category}</span>
                  <span className="text-sm text-muted-foreground">
                    {formatCurrency(spent)} / {formatCurrency(budget.amount)}
                  </span>
                </div>
                <Progress value={progress > 100 ? 100 : progress} className={progress > 100 ? '[&>div]:bg-destructive' : ''} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
