import { useState, useEffect } from 'react'; // Adicionado para gerenciar dados
import Layout from '../components/Layout';
// import { itensMock } from '../mocks/itensMock'; 

function ItensList() {
  const [itens, setItens] = useState([]); // Estado para os itens
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Chamada o BFF local
    fetch('http://localhost:3000/items/aggregated')
      .then((response) => response.json())
      .then((data) => {
        // No nosso BFF, definimos que os itens vêm dentro de 'equipamentos'
        // Se o seu BFF retornar outro nome, ajuste aqui: data.seu_nome
        setItens(data.equipamentos || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar itens do BFF:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <h1>Itens para Alugar</h1>

      {loading ? (
        <p>Carregando itens do servidor...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {itens.map((item) => (
            <div
              key={item.id}
              style={{ border: '1px solid #ccc', padding: '10px', width: '220px' }}
            >
              <img
                src={item.urlImagem || ''}
                style={{ width: '100%' }}
              />
              <h3>{item.nome}</h3>
              {/* Ajuste os campos abaixo de acordo com o que você colocou no seu BFF */}
              <p>Categoria: {item.categoria || 'Erro Categoria'}</p>
              <p>R$ {item.valorAluguelDia || item.valor_diaria}/dia</p>
            </div>
          ))}
        </div>
      )}
      
      {itens.length === 0 && !loading && <p>Nenhum item encontrado no servidor.</p>}
    </Layout>
  );
}

export default ItensList;