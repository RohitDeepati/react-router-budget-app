import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import ExpensePage, { expenseAction, expenseLoader } from "./pages/ExpensePage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

// react-tostify library import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Errors
import Error from "./pages/Error";
// layouts
import Main, { mainLoader } from "./layouts/Main";
// actions
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Main />}
      loader={mainLoader}
      errorElement={<Error />}
      children={[
        <Route
          index={true}
          element={<Dashboard />}
          loader={dashboardLoader}
          action={dashboardAction}
          errorElement={<Error />}
        />,

        <Route
          path="budget/:id"
          element={<BudgetPage />}
          loader={budgetLoader}
          action={budgetAction}
          errorElement={<Error />}
          children={[<Route path="delete" action={deleteBudget} />]}
        />,

        <Route
          path="expenses"
          element={<ExpensePage />}
          loader={expenseLoader}
          action={expenseAction}
          errorElement={<Error />}
        />,
        <Route path="logout" action={logoutAction} />,
      ]}
    />
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
