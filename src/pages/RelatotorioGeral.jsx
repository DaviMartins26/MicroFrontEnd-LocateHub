import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function RelatorioGeral() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/items/aggregated')
      .then(res => res.json())
      .then(setDados)
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <h1>Relatório de Integração (BFF Aggregator)</h1>
      
      {dados ? (
        <pre style={{ background: '#2d2d2d', color: '#ccc', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
          {JSON.stringify(dados, null, 2)}
        </pre>
      ) : (
        <p>Carregando integração...</p>
      )}
    </Layout>
  );
}

export default RelatorioGeral;