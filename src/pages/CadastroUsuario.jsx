import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function CadastroUsuario() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://locatehub-bff.greenmoss-1512f455.eastus2.azurecontainerapps.io
/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        navigate('/usuarios'); // Apos cadastrar vamos a listagem de usuario
      } else {
        alert("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <Layout>
      <h1>Cadastrar Usuário</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input 
          name="nome" 
          type="text" 
          placeholder="Nome" 
          value={formData.nome} 
          onChange={handleChange} 
          required 
        /><br />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        /><br />
        <input 
          name="senha" 
          type="password" 
          placeholder="Senha" 
          value={formData.senha} 
          onChange={handleChange} 
          required 
        /><br />

        <button type="submit">Salvar Usuário</button>
      </form>
    </Layout>
  );
}

export default CadastroUsuario;