"use server";

import { categorizeTransaction } from "@/ai/flows/categorize-transaction";
import { z } from "zod";

const schema = z.object({
  description: z.string().min(1, "Description is required."),
});

type State = {
  category?: string;
  message?: string | null;
  error?: boolean;
};

export async function getCategoryForTransaction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.description?.join(", "),
      error: true,
    };
  }

  try {
    // Simulate network delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const result = await categorizeTransaction({
      transactionDescription: validatedFields.data.description,
    });
    
    if (result.category) {
        return { category: result.category, message: "Categorized!", error: false };
    } else {
        return { message: "AI could not determine a category.", error: true };
    }

  } catch (error) {
    console.error(error);
    return { message: "An unexpected error occurred.", error: true };
  }
}
