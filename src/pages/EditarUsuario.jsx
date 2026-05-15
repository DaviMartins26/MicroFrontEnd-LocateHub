import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function EditarUsuario() {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  // 1. Carregar os dados atuais do usuário ao abrir a página
  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const data = await response.json();
        setFormData({
          nome: data.nome,
          email: data.email,
          senha: data.senha // No mundo real não baixaríamos a senha, mas para o trabalho está ok
        });
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    };
    carregarUsuario();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Usuário atualizado com sucesso!");
            navigate('/usuarios'); // Volta para a listagem
        }
        } catch (error) {
            console.error("Erro ao Atualizar:", error);
            alert("Erro ao salvar alterações.");
        }
    };

  return (
    <Layout>
      <h1>Editar Usuário #{id}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label>Nome:</label>
        <input name="nome" value={formData.nome} onChange={handleChange} required />
        
        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        
        <label>Senha:</label>
        <input name="senha" type="password" value={formData.senha} onChange={handleChange} required />
        
        <br />
        <button type="submit">
          Salvar Alterações
        </button>
        <button type="button" onClick={() => navigate('/usuarios')} style={{ marginTop: '10px' }}>
          Cancelar
        </button>
      </form>
    </Layout>
  );
}

export default EditarUsuario;