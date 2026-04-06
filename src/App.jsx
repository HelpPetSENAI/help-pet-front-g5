// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Páginas principais
import ComingSoonPage from "./pages/CommingSoonPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ExamplePage from "./pages/ExamplePage.jsx";
import GlobalStyle from "./styles/GlobalStyle.js";

// Páginas de login
import LoginCliente from "./pages/Login/LoginCliente.jsx";
import LoginDoador from "./pages/Login/LoginDoador.jsx";

const router = createBrowserRouter([
  // Página inicial
  {
    path: "/",
    element: <ComingSoonPage />,
    errorElement: <NotFoundPage />,
  },

  // Página de exemplo
  {
    path: "/example",
    element: <ExamplePage />,
  },

  // Rotas de login
  {
    path: "/login/cliente",
    element: <LoginCliente />,
  },
  {
    path: "/login/doador",
    element: <LoginDoador />,
  },

  // Rota de erro genérica
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}