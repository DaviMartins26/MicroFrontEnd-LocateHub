import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function RelatorioGeral() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://locatehub-bff.greenmoss-1512f455.eastus2.azurecontainerapps.io/items/aggregated')
      .then((res) => res.json())
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados agregados:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <h1>Dashboard de Integração (BFF Aggregator)</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Dados consolidados em tempo real consumindo microsserviços poliglota na nuvem Azure.
      </p>

      {loading ? (
        <p>Carregando e unificando ecossistema de dados...</p>
      ) : dados ? (
        <div>
          {/* --- CARD DE STATUS DO GATEWAY --- */}
          <div 
            style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '8px', 
              marginBottom: '30px', 
              borderLeft: '5px solid #2196f3',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <p style={{ margin: '0 0 5px 0' }}><strong>Status do Gateway:</strong> ✨ {dados.servidor}</p>
            <small style={{ color: '#555' }}>
              <strong>Última Sincronização:</strong> {new Date(dados.timestamp).toLocaleString('pt-BR')}
            </small>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* --- SEÇÃO 1: EQUIPAMENTOS (MONGO DB / NOSQL) --- */}
            <div>
              <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '8px', color: '#333' }}>
                📦 Catálogo de Equipamentos (NoSQL - MongoDB Atlas)
              </h2>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '15px' }}>
                {dados.equipamentos && dados.equipamentos.length > 0 ? (
                  dados.equipamentos.map((item) => (
                    <div
                      key={item.id}
                      style={{ 
                        border: '1px solid #ccc', 
                        padding: '15px', 
                        width: '220px', 
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}
                    >
                      <img
                        src={item.urlImagem || item.imagem} 
                        alt={item.nome}
                        style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{item.nome}</h3>
                      <p style={{ fontSize: '12px', color: '#777', margin: '0 0 8px 0' }}>
                        Categoria: {item.categoria || 'Geral'}
                      </p>
                      <p style={{ margin: 0, color: '#2c3e50' }}>
                        <strong>R$ {item.valorAluguelDia || item.valor_diaria}/dia</strong>
                      </p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#e74c3c' }}>Nenhum equipamento retornado pelo microsserviço de Itens.</p>
                )}
              </div>
            </div>

            {/* --- SEÇÃO 2: USUÁRIOS (AZURE SQL SERVER / RELACIONAL) --- */}
            <div>
              <h2 style={{ borderBottom: '2px solid #ddd', paddingBottom: '8px', color: '#333' }}>
                👥 Usuários no Sistema (Relacional - Azure SQL)
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                {dados.usuariosNoSistema && dados.usuariosNoSistema.length > 0 ? (
                  dados.usuariosNoSistema.map((usuario) => (
                    <div 
                      key={usuario.id} 
                      style={{ 
                        border: '1px solid #ddd', 
                        padding: '12px 20px', 
                        borderRadius: '8px', 
                        backgroundColor: '#fff',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                      }}
                    >
                      <p style={{ margin: 0, fontSize: '15px' }}>
                        <strong>{usuario.nome}</strong> 
                        <span style={{ color: '#666', marginLeft: '10px', fontSize: '14px' }}>
                          ({usuario.email})
                        </span>
                      </p>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          background: '#eceff1', 
                          padding: '4px 10px', 
                          borderRadius: '12px', 
                          color: '#455a64',
                          fontWeight: 'bold'
                        }}
                      >
                        SQL ID: {usuario.id}
                      </span>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#e74c3c' }}>Nenhum usuário retornado pelo microsserviço de Usuários.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      ) : (
        <p>Não foi possível recuperar os dados consolidados do BFF.</p>
      )}
    </Layout>
  );
}

export default RelatorioGeral;