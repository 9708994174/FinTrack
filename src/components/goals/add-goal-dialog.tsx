"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import * as React from "react"
import { useToast } from "@/hooks/use-toast"

export function AddGoalDialog({ children }: { children: React.ReactNode }) {
    const [date, setDate] = React.useState<Date>()
    const [open, setOpen] = React.useState(false);
    const { toast } = useToast();

    const handleSave = () => {
      // Here you would typically handle form submission,
      // e.g., send data to an API or update state.
      toast({
        title: "Goal Created!",
        description: "Your new financial goal has been saved.",
      });
      setOpen(false); // Close the dialog
    };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Goal</DialogTitle>
          <DialogDescription>
            Set a new financial goal to track your progress.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Goal Name
            </Label>
            <Input id="name" placeholder="e.g., Vacation Fund" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="target" className="text-right">
              Target Amount
            </Label>
            <Input id="target" type="number" placeholder="e.g., 3000" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">
              Deadline
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-3 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSave}>Save Goal</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
