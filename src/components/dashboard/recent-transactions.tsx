import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Transaction } from "@/types"
import { formatCurrency } from "@/lib/utils"
import { format } from "date-fns"
import { getCategoryIcon } from "@/components/icons"

export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  const recentTransactions = transactions.slice(0, 5)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your 5 most recent transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((transaction) => {
              const CategoryIcon = transaction.category ? getCategoryIcon(transaction.category) : null;
              return (
              <TableRow key={transaction.id}>
                <TableCell>
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-sm text-muted-foreground md:hidden">{format(new Date(transaction.date), "MMM d, yyyy")}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {transaction.category ? (
                    <Badge variant="outline" className="flex items-center gap-2 w-fit">
                        {CategoryIcon && <CategoryIcon className="h-3 w-3" />}
                        {transaction.category}
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Uncategorized</Badge>
                  )}
                </TableCell>
                <TableCell className="hidden sm:table-cell">{format(new Date(transaction.date), "MMM d, yyyy")}</TableCell>
                <TableCell className={`text-right font-medium ${transaction.type === 'income' ? 'text-accent-foreground' : 'text-foreground'}`}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {formatCurrency(transaction.amount)}
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
