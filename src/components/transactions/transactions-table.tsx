"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Transaction, Category } from "@/types"
import { formatCurrency } from "@/lib/utils"
import { format } from "date-fns"
import { getCategoryIcon } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CategorizeAction } from "./categorize-action"

export function TransactionsTable({ initialTransactions }: { initialTransactions: Transaction[] }) {
  const [transactions, setTransactions] = React.useState(initialTransactions)

  const handleCategoryUpdate = (transactionId: string, category: Category) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((t) =>
        t.id === transactionId ? { ...t, category } : t
      )
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Transactions</CardTitle>
        <CardDescription>A complete list of your income and expenses.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => {
                const CategoryIcon = transaction.category ? getCategoryIcon(transaction.category) : null
                return (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      {transaction.description}
                    </TableCell>
                    <TableCell>
                      {transaction.category ? (
                        <Badge variant="outline" className="flex items-center gap-2 w-fit">
                          {CategoryIcon && <CategoryIcon className="h-3 w-3" />}
                          {transaction.category}
                        </Badge>
                      ) : (
                        <CategorizeAction
                          description={transaction.description}
                          onCategoryUpdate={(category) => handleCategoryUpdate(transaction.id, category)}
                        />
                      )}
                    </TableCell>
                    <TableCell>{format(new Date(transaction.date), "PPP")}</TableCell>
                    <TableCell className={`text-right font-medium ${transaction.type === 'income' ? 'text-accent-foreground' : ''}`}>
                      {transaction.type === 'income' ? '+' : '-'}
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
