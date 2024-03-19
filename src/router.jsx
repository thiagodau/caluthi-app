import { createBrowserRouter } from "react-router-dom";

//Layouts
import LoginLayout from "./layouts/LoginLayout";

//Páginas
import Login from "./pages/Login";

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
    ],
  },
]);

export default router;
