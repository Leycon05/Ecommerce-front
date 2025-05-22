import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProdutosPage from "./pages/ProdutosPage";
import CarrinhoPage from "./pages/CarrinhoPage";
import FinalizacaoPage from "./pages/FinalizacaoPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/produtos"
        element={
          <ProtectedRoute>
            <ProdutosPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/carrinho"
        element={
          <ProtectedRoute>
            <CarrinhoPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/finalizacao"
        element={
          <ProtectedRoute>
            <FinalizacaoPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}