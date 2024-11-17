'use client';

import React, { useState } from 'react';

const PetRegistration = () => {
    
    
    const [formData, setFormData] = useState({
        nome: '',
        especie_pet: '',
        data_nasc: '',
        descricao: '',
        tamanho_pet: '',
        sexo_pet: '',
        image_pet: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do pet:', formData);
    };

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Registro de Pet</h2>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
                
                <div>
                    <label className="block text-lg mb-2">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        maxLength={100}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

               
                <div>
                    <label className="block text-lg mb-2">Espécie</label>
                    <select
                        name="especie_pet"
                        value={formData.especie_pet}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecione a espécie</option>
                        <option value="cachorro">Cachorro</option>
                        <option value="gato">Gato</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

              
                <div>
                    <label className="block text-lg mb-2">Data de Nascimento</label>
                    <input
                        type="date"
                        name="data_nasc"
                        value={formData.data_nasc}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

           

                <div>
                    <label className="block text-lg mb-2">Tamanho do Pet</label>
                    <select
                        name="tamanho_pet"
                        value={formData.tamanho_pet}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecione o tamanho</option>
                        <option value="pequeno">Pequeno</option>
                        <option value="medio">Médio</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>

             
                <div>
                    <label className="block text-lg mb-2">Sexo</label>
                    <select
                        name="sexo_pet"
                        value={formData.sexo_pet}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecione o sexo</option>
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                    </select>
                </div>

               
                <div>
                    <label className="block text-lg mb-2">Imagem do Pet (URL)</label>
                    <input
                        type="text"
                        name="image_pet"
                        value={formData.image_pet}
                        onChange={handleChange}
                        maxLength={300}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                
                <div>
                    <label className="block text-lg mb-2">Descrição</label>
                    <textarea
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        maxLength={280}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>

                
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Registrar Pet
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PetRegistration;
