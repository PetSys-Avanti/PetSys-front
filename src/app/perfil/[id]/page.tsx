'use client'

import React, { useContext, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/contexts/AuthContext';

export default function Profile() {
  const { user, isAuthenticated, setIsAuthenticated } = useContext(AuthContext); 
  const [adotante, setAdotante] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); 
      return;
    }

    const fetchAdotante = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        
        if (!token) {
          console.log("Token não encontrado");
          router.push('/'); 
          return;
        }

        const response = await fetch(`https://api-petsys.onrender.com/api/v1/adotantes/${user?.adotante_id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar adotante');
        }

        const data = await response.json();
        setAdotante(data);
      } catch (error) {
        console.error('Erro ao buscar adotante:', error);
        alert('Erro ao carregar adotante');
        router.push('/'); 
      }
    };

    fetchAdotante();
  }, [isAuthenticated, router, user?.adotante_id]);

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Você precisa estar logado para acessar o perfil.</h1>
      </div>
    );
  }

  if (!adotante) {
    return (
      <div>
        <h1>Carregando dados do perfil...</h1>
      </div>
    );
  }

  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm("Você tem certeza que deseja deletar seu perfil?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        alert('Token não encontrado');
        return;
      }

      const response = await fetch(`https://api-petsys.onrender.com/api/v1/adotantes/${adotante.adotante_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar perfil');
      }

      

      localStorage.removeItem('auth_token');

      setIsAuthenticated(false);
      alert('Perfil deletado com sucesso');
      router.push('/');  
    } catch (error) {
      console.error('Erro ao deletar perfil:', error);
      alert('Erro ao deletar perfil');
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center w-full max-w-6xl space-x-8">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Perfil de {adotante?.nome}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p><strong>Nome:</strong> {adotante?.nome}</p>
              <p><strong>E-mail:</strong> {adotante?.email}</p>
              <p><strong>Telefone:</strong> {adotante?.telefone || 'Não informado'}</p>
              <p><strong>CEP:</strong> {adotante?.cep || 'Não informado'}</p>
              <p><strong>Endereço:</strong> {adotante?.endereco || 'Não informado'}</p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button 
                onClick={() => router.push(`/perfil-edit/${adotante.adotante_id}`)} 
                className="w-full" 
              >
                Editar Perfil
              </Button>
              <Button 
                onClick={handleDeleteProfile} 
                className="w-full bg-red-600 hover:bg-red-700" 
              >
                Deletar Perfil
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
