'use client'

import { useEffect } from 'react'
import MainContainer from '@/components/MainContainer'

export default function Home() {
  useEffect(() => {
    // Verifica se a página já foi recarregada antes
    if (!sessionStorage.getItem('reloaded')) {
      // Marca que a página foi recarregada
      sessionStorage.setItem('reloaded', 'true');
      
      // Força o recarregamento da página
      window.location.reload();
    }
  }, []); // O efeito será executado apenas uma vez, na montagem do componente
  
  return <MainContainer />;
}
