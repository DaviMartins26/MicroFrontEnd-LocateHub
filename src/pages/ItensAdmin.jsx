import Layout from '../components/Layout';
import { itensMock } from '../mocks/itensMock';

function ItensAdmin() {
  const handleEditar = (id) => {
    // TODO: Abrir formulário de edição do item.
    console.log('Editar item', id);
  };

  const handleExcluir = (id) => {
    // TODO: Enviar DELETE para o BFF.
    console.log('Excluir item', id);
  };

  return (
    <Layout>
      <h1>Administração de Itens</h1>

      {itensMock.map((item) => (
        <div
          key={item.id}
          style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
        >
          <p><strong>{item.nome}</strong></p>
          <p>{item.categoria}</p>
          <p>R$ {item.valorAluguelDia}/dia</p>

          <button onClick={() => handleEditar(item.id)}>Editar</button>
          <button onClick={() => handleExcluir(item.id)}>
            Excluir
          </button>
        </div>
      ))}
    </Layout>
  );
}

export default ItensAdmin;