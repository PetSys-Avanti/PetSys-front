'use client'

import * as z from 'zod'
import {useForm} from 'react-hook-form'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
export default function FormRegister() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        cep: '',
        endereco: '',
        user_adotante: 'usuario', 
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmitCadastro = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api-petsys.onrender.com/api/v1/adotantes', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Usuário registrado com sucesso!');
            } else {
                alert('Erro ao registrar o usuário.');
            }

        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro ao enviar os dados.');
        }

        console.log('Usuário cadastrado:', formData);
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log('Login enviado:', formData);
    };

    return (
        <div className="flex h-screen w-full justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center w-full max-w-6xl space-x-8">
                <div className="w-full max-w-md">
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="create-account">Criar conta</TabsTrigger>
                        </TabsList>

                        <TabsContent value="login">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Login</CardTitle>
                                    <CardDescription>
                                        Acesse sua conta usando e-mail e senha.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <form onSubmit={handleSubmitLogin}>
                                        <div className="space-y-2">
                                            <Label htmlFor="email-login">E-mail</Label>
                                            <Input
                                                id="email-login"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Digite seu e-mail"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="senha-login">Senha</Label>
                                            <Input
                                                id="senha-login"
                                                name="senha"
                                                type="password"
                                                value={formData.senha}
                                                onChange={handleInputChange}
                                                placeholder="Digite sua senha"
                                            />
                                        </div>
                                        <CardFooter>
                                            <Button type="submit" className="w-full">Entrar</Button>
                                        </CardFooter>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="create-account">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">Criar conta</CardTitle>
                                    <CardDescription>
                                        Crie uma conta para acessar o sistema.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <form onSubmit={handleSubmitCadastro}>
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
                                            <Label htmlFor="senha">Senha</Label>
                                            <Input
                                                id="senha"
                                                name="senha"
                                                type="password"
                                                value={formData.senha}
                                                onChange={handleInputChange}
                                                placeholder="Digite sua senha"
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
                                        <div className="space-y-2">
                                            <Label htmlFor="user_adotante">Tipo de Usuário</Label>
                                            <select
                                                id="user_adotante"
                                                name="user_adotante"
                                                value={formData.user_adotante}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                            >
                                                <option value="usuario">Usuário</option>
                                                <option value="administrador">Administrador</option>
                                            </select>
                                        </div>
                                        <CardFooter>
                                            <Button type="submit" className="w-full">Criar conta</Button>
                                        </CardFooter>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}