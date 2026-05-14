import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após salvar
import Layout from '../components/Layout';

function CadastroItem() {
  const navigate = useNavigate();
  // Estado para armazenar os campos do formulário
  const [formData, setFormData] = useState({
    urlImagem: '',
    nome: '',
    categoria: '',
    valorAluguelDia: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) // Envia o estado do formulário como JSON
      });

      if (response.ok) {
        alert("Item cadastrado com sucesso!");
        navigate('/itens'); // Volta para a listagem (confirme se o path é esse no seu AppRoutes)
      } else {
        alert("Erro ao cadastrar.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  // Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Layout>
      <h1>Cadastrar Item</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input name="urlImagem" type="text" placeholder="URL da imagem" onChange={handleChange} required />
        <input name="nome" type="text" placeholder="Nome do item" onChange={handleChange} required />
        <input name="categoria" type="text" placeholder="Categoria" onChange={handleChange} required />
        <input name="valorAluguelDia" type="number" placeholder="Valor aluguel por dia" onChange={handleChange} required />

        <button type="submit" style={{ marginTop: '20px' }}>Salvar Item</button>
      </form>
    </Layout>
  );
}

export default CadastroItem;