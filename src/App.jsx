import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ComingSoonPage from "./pages/CommingSoonPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ExamplePage from "./pages/ExamplePage.jsx";
import Login from "./pages/Login/Login.jsx";

import GlobalStyle from "./styles/GlobalStyle.js";
import SignUp from "./pages/SIgnUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoonPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/example",
    element: <ExamplePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />
  },
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