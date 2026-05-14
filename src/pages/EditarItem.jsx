import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function EditarItem() {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    urlImagem: '',nome: '', categoria: '', valorAluguelDia: ''
  });
  //const [formData, setFormData] = useState({ nome: 'Teste', categoria: 'Ferramentas' });

  // 1. Carrega os dados atuais do item ao abrir a página
    useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
        .then(res => {
        if (!res.ok) throw new Error("Item não encontrado no servidor");
        return res.json();
        })
        .then(data => {
        console.log("Dados que vieram do banco:", data);
        setFormData(data);
        })
        .catch(err => console.error("Erro ao carregar item:", err.message));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const itemParaSalvar = { 
            ...formData, 
            id: id,
            valorAluguelDia: Number(formData.valorAluguelDia) // Garante que é número
        }; 
        
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemParaSalvar)
        });

        if (response.ok) {
            alert("Item atualizado!");
            navigate('/admin-itens');
        }
        } catch (error) {
        console.error("Erro ao salvar:", error);
        }
    };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <h1>Editar Item</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input name="urlImagem" value={formData.urlImagem || 'Carregando'} onChange={handleChange} placeholder="URL Imagem" />
        <input name="nome" value={formData.nome || 'Carregando'} onChange={handleChange} placeholder="Nome" required />
        <input name="categoria" value={formData.categoria || 'Carregando'} onChange={handleChange} placeholder="Categoria" required />
        <input name="valorAluguelDia" value={formData.valorAluguelDia || 'Carregando'} onChange={handleChange} type="number" required />
        <button type="submit">Salvar Alterações</button>
      </form>
    </Layout>
  );
}

export default EditarItem;