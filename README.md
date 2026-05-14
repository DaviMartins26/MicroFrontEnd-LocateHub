# 💻 LocateHub - Portal Administrativo (Frontend)

Interface de usuário construída em React para o gerenciamento da plataforma da plataforma **LocateHub**.

## 🚀 Funcionalidades do Ciclo de Itens
* **Listagem Dinâmica**: Consumo do endpoint agregado para exibição do catálogo de equipamentos.
* **Gestão Administrativa**: Tela dedicada para exclusão e navegação para edição de itens.
* **Fluxo de Cadastro e Edição**: Formulários inteligentes que validam dados e persistem informações no banco via BFF.

## 🛠️ Tecnologias
* **React**: Biblioteca para construção de interfaces SPA.
* **React Router Dom**: Gestão de rotas dinâmicas e parâmetros de URL (IDs).
* **Fetch API**: Comunicação nativa com o BFF.
* **Vite**: Ferramenta de build e desenvolvimento ultra-rápida.

## 🚦 Como rodar o projeto
1. Instale as dependências: `npm install`
2. Inicie o ambiente de desenvolvimento: `npm run dev`
3. O portal estará disponível em: `http://localhost:5173` (ou porta padrão do Vite).

## 📂 Estrutura de Páginas
* `/itens`: Visualização pública dos equipamentos.
* `/admin-itens`: Painel de controle para administradores.
* `/cadastrar-item`: Formulário de inserção.
* `/editar-item/:id`: Edição baseada no ID único do MongoDB.

## 👥 Desenvolvedores
* **Davi Martins**
* **Joshua Mendes**