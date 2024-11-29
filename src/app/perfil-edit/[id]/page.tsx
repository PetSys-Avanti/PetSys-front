'use client'

import * as z from 'zod';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'; // Importando useParams

const formSchema = z.object({
    email: z.string({required_error: "Email necessário"}).email({message: 'Precisa ser email válido.'}),
    nome: z.string({required_error: 'Nome não pode estar vazio'}),
    telefone: z.string().optional(),
    cep: z.string().optional(),
    endereco: z.string().optional(),
});

export default function EditProfile() {
    const router = useRouter();
    const { id } = useParams(); // Usando useParams para acessar o parâmetro da URL
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Buscar dados do perfil a partir do ID
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('auth_token');
                if (!token) {
                    alert('Token não encontrado');
                    return;
                }

                const response = await fetch(`https://api-petsys.onrender.com/api/v1/adotantes/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        nome: data.nome,
                        email: data.email,
                        telefone: data.telefone || '',
                        cep: data.cep || '',
                        endereco: data.endereco || '',
                    });
                    setLoading(false);
                } else {
                    alert('Erro ao buscar perfil');
                }
            } catch (error) {
                console.error('Erro ao buscar perfil:', error);
                alert('Erro ao carregar dados');
            }
        };

        fetchProfile();
    }, [id]); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('auth_token');
            if (!token) {
                alert('Token não encontrado');
                return;
            }

            const response = await fetch(`https://api-petsys.onrender.com/api/v1/adotantes/${id}`, {
                method: "PUT", 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Perfil atualizado com sucesso!');
                router.push(`/perfil/${id}`); 
            } else {
                alert('Erro ao atualizar o perfil');
            }

        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro ao enviar os dados');
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="flex h-screen w-full justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center w-full max-w-6xl space-x-8">
                <div className="w-full max-w-md">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Editar Perfil</CardTitle>
                            <CardDescription>
                                Edite seus dados pessoais abaixo.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        placeholder="Digite seu nome completo"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Digite seu e-mail"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="telefone">Telefone</Label>
                                    <Input
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        placeholder="Digite seu telefone"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cep">CEP</Label>
                                    <Input
                                        id="cep"
                                        name="cep"
                                        value={formData.cep}
                                        onChange={handleInputChange}
                                        placeholder="Digite seu CEP"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="endereco">Endereço</Label>
                                    <Input
                                        id="endereco"
                                        name="endereco"
                                        value={formData.endereco}
                                        onChange={handleInputChange}
                                        placeholder="Digite seu endereço"
                                    />
                                </div>
                                <CardFooter>
                                    <Button type="submit" className="w-full">Atualizar Perfil</Button>
                                </CardFooter>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
