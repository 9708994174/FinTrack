"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { getCategoryForTransaction } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Wand2, Loader2 } from "lucide-react"
import { useEffect } from "react"
import type { Category } from "@/types"

type CategorizeActionProps = {
  description: string
  onCategoryUpdate: (category: Category) => void
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button size="sm" variant="outline" type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      Categorize
    </Button>
  )
}

export function CategorizeAction({
  description,
  onCategoryUpdate,
}: CategorizeActionProps) {
  const initialState = { message: null, error: false, category: undefined }
  const [state, dispatch] = useActionState(getCategoryForTransaction, initialState)

  useEffect(() => {
    if (state.category) {
      onCategoryUpdate(state.category as Category)
    }
  }, [state.category, onCategoryUpdate])

  return (
    <form action={dispatch}>
      <input type="hidden" name="description" value={description} />
      <SubmitButton />
    </form>
  )
}
