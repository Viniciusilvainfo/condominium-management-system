import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Pedidos from "./components/Pedidos.jsx";
import AddPedidos from "./components/AddPedidos.jsx";

createRoot(document.getElementById("root")).render(<App />);
