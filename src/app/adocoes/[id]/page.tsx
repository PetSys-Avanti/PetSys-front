// 'use client' TODO: PAGINA DE ADOÇÕES

// import { useEffect, useState, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import { AuthContext } from '@/app/contexts/AuthContext';
// import PetCard from '@/components/PetCard';

// export default function Adocoes() {
//     const [adocoes, setAdocoes] = useState<any[]>([]); // Inicializado como array vazio
//     const { user, isAuthenticated } = useContext(AuthContext); // Pegando o usuário autenticado
//     const router = useRouter(); // Adicionando o useRouter para redirecionamento

//     useEffect(() => {
//         // Verifica se o usuário está autenticado antes de fazer a requisição
//         if (!user || !user.adotante_id) {
//             console.log("Usuário não autenticado ou adotante_id não encontrado");
//             router.push('/login'); // Redireciona para a página de login se o usuário não estiver autenticado
//             return;
//         }

//         const fetchAdocoes = async () => {
//             try {
//                 // Faz a requisição filtrando as adoções pelo adotante_id
//                 const res = await fetch(`https://api-petsys.onrender.com/api/v1/adocoes?adotante_id=${user.adotante_id}`, {
//                     method: 'GET',
//                 });

//                 if (!res.ok) {
//                     console.error("Erro ao buscar adoções");
//                     return;
//                 }

//                 const data = await res.json();
//                 setAdocoes(data); // Atualiza o estado com as adoções encontradas
//             } catch (error) {
//                 console.error('Erro ao buscar adoções:', error);
//             }
//         };

//         fetchAdocoes(); // Chama a função para buscar as adoções

//     }, [user, router]); // Dependência em 'user', pois o id do adotante pode mudar com o login/logout

//     return (
//         <div>
//             {adocoes.length > 0 ? (
//                 adocoes.map((adocao, index) => (
//                     <PetCard key={index} pet={adocao.pet} /> // Exibe as adoções com os pets relacionados
//                 ))
//             ) : (
//                 <p>Nenhuma adoção encontrada.</p> // Caso não tenha adoções para o usuário
//             )}
//         </div>
//     );
// }
