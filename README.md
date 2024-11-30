# PetSys - Sistema de Adoção de Animais

PetSys é uma plataforma digital que conecta pessoas interessadas em adotar animais com abrigos e grupos de resgates, oferecendo uma experiência fácil e segura. O objetivo do projeto é ajudar a promover a adoção de animais, oferecendo informações detalhadas sobre cada pet e facilitando o processo de conexão entre adotantes e abrigos.

## Índice

- [Sobre](#sobre)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Instalação](#instalação)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)


## Sobre

Este projeto foi desenvolvido para o Bootcamp Atlântico Avanti com o intuito de ajudar ONGs e abrigos de animais a encontrarem lares para os pets que precisam. Ele permite que os usuários visualizem animais disponíveis para adoção, filtrem os resultados por características como tamanho e idade, e façam a adoção diretamente pelo sistema.

Além disso, o sistema oferece um painel para administradores e abrigos, permitindo que eles gerenciem os animais, visualizem dados estatísticos sobre o número de adoções realizadas, e mantenham suas informações sempre atualizadas.

## Tecnologias Usadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Frontend:
- **React**: Framework para construção da interface.
- **Next.js**: Framework React para SSR (Server-Side Rendering) e geração de sites estáticos.
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.
- **React Icons**: Biblioteca de ícones para componentes de interface.
- **Supabase**: Banco de dados e gerenciamento de autenticação.

### Backend:
- **Node.js com Express**: Para gerenciamento de APIs e dados.
- **Supabase**: Armazenamento de imagens e autenticação de usuários.

## Instalação

### Pré-requisitos

Antes de rodar o projeto, você precisará instalar algumas dependências. Garanta que você tenha as seguintes ferramentas instaladas:

- **Node.js** (v16 ou superior)
- **Yarn** (opcional, mas recomendado para gerenciamento de pacotes)

### Passos

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/seu-usuario/petsys.git
    cd pet-sys
    ```

2. **Instale as dependências do projeto**:

    - Se você está usando o Yarn:

    ```bash
    yarn install
    ```

    - Ou, se preferir npm:

    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente**:

    Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis com seus respectivos valores:

    ```plaintext
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER=your_bucket_folder
    NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_TO_SEND=your_bucket_folder_to_send
    ```

4. **Rode o projeto**:

    - Usando Yarn:

    ```bash
    yarn dev
    ```

    - Ou, usando npm:

    ```bash
    npm run dev
    ```

    O aplicativo estará rodando em [http://localhost:3000](http://localhost:3000).

## Estrutura de Pastas

A estrutura do projeto é organizada da seguinte maneira:

```bash
/pages
  /api               # Endpoints da API
  /auth              # Páginas de autenticação
  index.js           # Página inicial
/components
  /ui                # Componentes reutilizáveis como Botões e Modais
  /PetCard           # Componente de exibição do pet
  /Navbar            # Componente de navegação
/hooks                # Custom hooks como manipulação de estado e eventos
/styles               # Arquivos de estilo, como TailwindCSS config



## Funcionalidades

- **Visualização de Animais**: Os usuários podem visualizar os detalhes de cada animal disponível para adoção.
- **Filtro de Animais**: Filtros de pesquisa por características como idade, tamanho e gênero dos animais.
- **Cadastro de Usuário**: Usuários podem se cadastrar e fazer login para acompanhar os animais que têm interesse.
- **Administração de Adoções**: Administradores podem adicionar novos pets, editar informações e gerenciar adoções.
- **Upload de Fotos**: Utilização de Supabase para armazenamento de imagens de pets.

