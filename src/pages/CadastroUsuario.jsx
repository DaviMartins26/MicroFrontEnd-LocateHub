import Layout from '../components/Layout';

function CadastroUsuario() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Capturar dados do formulário.
    // TODO: Enviar POST para o BFF.
    // TODO: Salvar no banco SQL.
  };

  return (
    <Layout>
      <h1>Cadastrar Usuário</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Senha" /><br /><br />

        <button type="submit">Salvar Usuário</button>
      </form>
    </Layout>
  );
}

export default CadastroUsuario;