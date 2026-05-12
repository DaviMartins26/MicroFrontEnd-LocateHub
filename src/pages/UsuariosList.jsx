import Layout from '../components/Layout';
import { usuariosMock } from '../mocks/usuariosMock';

function UsuariosList() {
  const handleEditar = (id) => {
    // TODO: Abrir formulário de edição.
    console.log('Editar usuário', id);
  };

  const handleExcluir = (id) => {
    // TODO: Enviar DELETE para o BFF.
    console.log('Excluir usuário', id);
  };

  return (
    <Layout>
      <h1>Usuários</h1>

      {usuariosMock.map((usuario) => (
        <div
          key={usuario.id}
          style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
        >
          <p><strong>{usuario.nome}</strong></p>
          <p>{usuario.email}</p>

          <button onClick={() => handleEditar(usuario.id)}>Editar</button>
          <button onClick={() => handleExcluir(usuario.id)}>
            Excluir
          </button>
        </div>
      ))}
    </Layout>
  );
}

export default UsuariosList;