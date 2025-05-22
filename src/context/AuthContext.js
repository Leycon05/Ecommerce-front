// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioSalvo) {
      setUsuario(usuarioSalvo);
    }
  }, []);

  const login = (email, senha) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    if (user) {
      setUsuario(user);
      localStorage.setItem("usuario", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  const registrar = (novoUsuario) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, registrar }}>
      {children}
    </AuthContext.Provider>
  );
};
