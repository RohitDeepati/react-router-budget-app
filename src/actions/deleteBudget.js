// rrd imports
import { redirect } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// helper function
import { deleteItem, getAllMatchingItems } from "../components/helper";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      value: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget deleted successfully!");
  } catch (e) {
    throw new Error("Theree was a problem deleting your budget.");
  }
  return redirect("/");
}
