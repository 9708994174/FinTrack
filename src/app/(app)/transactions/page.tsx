import { transactions } from "@/lib/data"
import { TransactionsTable } from "@/components/transactions/transactions-table"

export default function TransactionsPage() {
  return (
    <div>
      <TransactionsTable initialTransactions={transactions} />
    </div>
  )
}
