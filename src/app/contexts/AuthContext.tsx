'use client';

import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

type AuthContextType = {
  isAuthenticated: boolean;
  user: { nome: string; email: string } | null;  // Adicionando a estrutura do usuário
  login: (token: string, userData: { nome: string; email: string }) => void;  // Recebe os dados do usuário ao fazer login
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ nome: string; email: string } | null>(null); // Estado para armazenar os dados do usuário

  const checkToken = () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decoded = jwtDecode<any>(token); 
        
        const currentTime = Date.now() / 1000; 
        if (decoded.exp && decoded.exp > currentTime) {
          setIsAuthenticated(true);
          setUser({ nome: decoded.nome, email: decoded.email });  
        } else {
          setIsAuthenticated(false);
          setUser(null); // Se o token expirou, limpa os dados do usuário
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null); // Em caso de erro, limpa os dados do usuário
      }
    } else {
      setIsAuthenticated(false);
      setUser(null); // Se não houver token, limpa os dados do usuário
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const login = (token: string, userData: { nome: string; email: string }) => {
    localStorage.setItem('auth_token', token);  
    setIsAuthenticated(true);
    setUser(userData); 
  };

  const logout = () => {
    localStorage.removeItem('auth_token'); 
    setIsAuthenticated(false);
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
