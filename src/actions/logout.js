// rrd imports
import { redirect } from "react-router-dom";
import { deleteItem, fetchData } from "../components/helper";
import { toast } from "react-toastify";

// helpers

export const logoutAction = async () => {
  const userName = fetchData("userName");
  // delete user
  deleteItem({
    key: "userName",
  });
  // delete budget
  deleteItem({
    key: "budgets",
  });
  // delete
  deleteItem({
    key: "expenses",
  });
  toast.success(`Goodbye ☹️, ${userName}! Your account has been deleted.`);
  // return redirect

  return redirect("/");
};
