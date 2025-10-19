import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PedidoPage from "./pages/PedidoPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/pedido",
    element: <PedidoPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// createRoot(document.getElementById("root")).render(<App />);
