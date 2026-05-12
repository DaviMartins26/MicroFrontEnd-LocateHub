import Layout from '../components/Layout';
import { itensMock } from '../mocks/itensMock';

function ItensList() {
  // TODO: Substituir itensMock por dados vindos do BFF.

  return (
    <Layout>
      <h1>Itens para Alugar</h1>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {itensMock.map((item) => (
          <div
            key={item.id}
            style={{ border: '1px solid #ccc', padding: '10px', width: '220px' }}
          >
            <img
              src={item.urlImagem}
              alt={item.nome}
              style={{ width: '100%' }}
            />
            <h3>{item.nome}</h3>
            <p>Categoria: {item.categoria}</p>
            <p>R$ {item.valorAluguelDia}/dia</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ItensList;