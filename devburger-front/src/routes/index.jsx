"use client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import { Cart } from '../pages/Cart';
import { Checkout } from '../pages/Checkout';
import { Login } from '../pages/Login';
import { MeusPedidos } from '../pages/MeusPedidos';
import { AdminRoute } from './AdminRoute';
import { AdminPedidos } from '../pages/AdminPedidos';
import { PrivateRoute } from './PrivateRoute';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* rota pública (INICIAL) */}
        <Route path="/" element={<Login />} />

        {/* rotas protegidas */}
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
