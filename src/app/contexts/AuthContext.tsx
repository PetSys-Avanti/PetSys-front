'use client';

import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

type AuthContextType = {
  isAuthenticated: boolean;
  user: { nome: string; adotante_id: string } | null;  
  login: (token: string, userData: { nome: string; adotante_id: string }) => void;  
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ nome: string; adotante_id: string } | null>(null);

  const checkToken = () => {
    const token = localStorage.getItem('auth_token');
    
    // Verificando o JWT armazenado no localStorage
    console.log('JWT armazenado:', token);

    if (token) {
      try {
        // Decodificando o JWT
        const decoded = jwtDecode<any>(token);
        
       
        console.log('JWT decodificado:', decoded);

        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp > currentTime) {
          setIsAuthenticated(true);
          setUser({ nome: decoded.nome, adotante_id: decoded.id });  
          console.log('Usuário autenticado:', decoded.nome, decoded.id);  
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Erro ao decodificar o JWT:', error);
        setIsAuthenticated(false);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const login = (token: string, userData: { nome: string; adotante_id: string }) => {
    localStorage.setItem('auth_token', token);
    
    // Verificando o JWT logo após o login
    console.log('JWT após login:', token);
    
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    
   
    console.log('JWT removido');
    
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
