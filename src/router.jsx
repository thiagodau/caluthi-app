import { createBrowserRouter } from "react-router-dom";

//Layouts
import LoginLayout from "./layouts/LoginLayout";

//Páginas
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

let usuariolink = 'PATHISHERE'
let arrobaUsuario = `/${usuariolink}` 


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
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
