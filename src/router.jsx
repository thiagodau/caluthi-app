import { Navigate, createBrowserRouter } from "react-router-dom";

//Layouts
import LoginLayout from "./layouts/LoginLayout";
import DashboardLayout from "./layouts/DashboardLayout";

//Páginas
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Schedules from "./pages/Schedules";
import Services from "./pages/Services";
import NewService from "./pages/NewService";
import Singup from "./pages/Singup";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("@user-id") !== null;
  console.log("isAuth: ", isAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

//rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "singup",
        element: <Singup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute redirectTo="/">
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "schedules",
        element: (
          <PrivateRoute redirectTo={"/"}>
            <Schedules />
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: (
          <PrivateRoute redirectTo={"/"}>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "services/new",
        element: (
          <PrivateRoute redirectTo={"/"}>
            <NewService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
