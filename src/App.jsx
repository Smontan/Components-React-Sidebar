import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
import {
  Billing,
  Dashboard,
  Help,
  Inventory,
  Orders,
  Setting,
  Statistics,
} from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/billings", element: <Billing /> },
        { path: "/help", element: <Help /> },
        { path: "/inventory", element: <Inventory /> },
        { path: "/orders", element: <Orders /> },
        { path: "/settings", element: <Setting /> },
        { path: "/statistics", element: <Statistics /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
