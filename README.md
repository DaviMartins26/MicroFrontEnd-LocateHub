Interface de usuário construída em React para a gestão unificada e operação da plataforma **LocateHub**.

## 🚀 Funcionalidades do Ecossistema
* **Catálogo com Simulador Serverless**: Listagem dinâmica de itens de locação integrada ao motor de cálculo da Azure Function, permitindo simulações de orçamento em tempo real com regras de desconto progressivo.
* **Gestão de Usuários**: CRUD completo (Listagem, Cadastro, Edição e Exclusão) integrado diretamente ao banco relacional Azure SQL via BFF.
* **Painel Administrativo de Itens**: Tela dedicada para o controle gerencial, exclusão e navegação para modificação de equipamentos cadastrados no MongoDB.

## 🛠️ Tecnologias
* **React**: Biblioteca componentizada para construção de interfaces SPA.
* **React Router Dom**: Gestão de rotas dinâmicas, controle de navegação e parâmetros de URL (IDs).
* **Fetch API**: Comunicação nativa e otimizada com o BFF.
* **Vite**: Ferramenta de build e desenvolvimento ultra-rápida.

## 🚦 Como rodar o projeto
1. Instale as dependências: `npm install`
2. Inicie o ambiente de desenvolvimento: `npm run dev`
3. O portal estará disponível em: `http://localhost:5173`

## 📂 Estrutura de Páginas Cadastradas
* `/itens`: Visualização pública dos equipamentos com simulador de preço de aluguel.
* `/admin-itens`: Painel de controle corporativo para gerenciamento dos equipamentos.
* `/cadastrar-item`: Formulário de inserção de novos equipamentos.
* `/editar-item/:id`: Edição de item mapeada via ID único do MongoDB.
* `/usuarios`: Listagem de usuários cadastrados no banco relacional da Azure.
* `/editar-usuario/:id`: Tela de atualização de dados cadastrais de perfil.
*

## 👥 Desenvolvedores
* **Davi Martins**
* **Joshua Mendes**