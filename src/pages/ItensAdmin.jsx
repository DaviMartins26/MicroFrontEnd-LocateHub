import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function ItensAdmin() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Carrega os itens ao entrar na página
  useEffect(() => {
    fetch('http://localhost:3000/aggregated-data')
      .then(res => res.json())
      .then(data => {
        setItens(data.equipamentos || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar itens:", err);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const handleEditar = (id) => {
    // Isso vai mudar a URL para algo como: localhost:5173/editar-item/6604...
    navigate(`/editar-item/${id}`); 
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove o item da lista na tela sem precisar recarregar a página
          setItens(itens.filter(item => item.id !== id));
          alert("Item removido!");
        } else {
          alert("Erro ao excluir o item.");
        }
      } catch (error) {
        console.error("Erro na requisição de exclusão:", error);
      }
    }
  };

  return (
    <Layout>
      <h1>Administração de Itens</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        itens.map((item) => (
          <div
            key={item.id}
            style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}
          >
            <p><strong>{item.nome}</strong> (ID: {item.id})</p>
            <p>Categoria: {item.categoria}</p>
            <p>R$ {item.valorAluguelDia}/dia</p>

            <button onClick={() => handleEditar(item.id)} style={{ marginRight: '10px' }}>Editar</button>
            <button onClick={() => handleExcluir(item.id)} style={{ color: 'red' }}>Excluir</button>
          </div>
        ))
      )}

      {itens.length === 0 && !loading && <p>Nenhum item para administrar.</p>}
    </Layout>
  );
}

export default ItensAdmin;