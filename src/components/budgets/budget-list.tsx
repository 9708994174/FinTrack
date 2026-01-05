import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Budget, Transaction, Category } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { categoryIcons, getCategoryIcon } from "@/components/icons";

export function BudgetList({ budgets, transactions }: { budgets: Budget[], transactions: Transaction[] }) {
  const getSpendingForCategory = (category: Category) => {
    return transactions
      .filter(t => t.type === 'expense' && t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {budgets.map(budget => {
        const spent = getSpendingForCategory(budget.category);
        const progress = (spent / budget.amount) * 100;
        const remaining = budget.amount - spent;
        const Icon = getCategoryIcon(budget.category);

        return (
          <Card key={budget.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${categoryIcons[budget.category]?.color || 'text-gray-500'}`} />
                  {budget.category}
                </CardTitle>
                <div className="text-lg font-semibold">{formatCurrency(budget.amount)}</div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={progress > 100 ? 100 : progress} className={`h-2 ${progress > 100 ? '[&>div]:bg-destructive' : ''}`} />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>Spent: {formatCurrency(spent)}</span>
                <span className={remaining < 0 ? 'text-destructive font-medium' : ''}>
                  {remaining >= 0 ? `${formatCurrency(remaining)} left` : `${formatCurrency(Math.abs(remaining))} over`}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
