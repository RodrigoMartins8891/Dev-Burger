import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/home";
import Menu from "../pages/Menu/menu";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { MeusPedidos } from "../pages/MeusPedidos";
import { AdminRoute } from "./AdminRoute";
import { AdminPedidos } from "../pages/AdminPedidos";
import { PrivateRoute } from "./PrivateRoute";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 ROTAS PÚBLICAS */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 ROTAS PRIVADAS (USUÁRIO LOGADO) */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />

        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route
          path="/meus-pedidos"
          element={
            <PrivateRoute>
              <MeusPedidos />
            </PrivateRoute>
          }
        />

        {/* 🔐 ROTAS ADMIN */}
        <Route
          path="/admin/pedidos"
          element={
            <AdminRoute>
              <AdminPedidos />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
