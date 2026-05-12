import Layout from '../components/Layout';

function CadastroItem() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Capturar dados do formulário.
    // TODO: Enviar POST para o BFF.
    // TODO: Salvar no MongoDB.
  };

  return (
    <Layout>
      <h1>Cadastrar Item</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="URL da imagem" /><br /><br />
        <input type="text" placeholder="Nome do item" /><br /><br />
        <input type="text" placeholder="Categoria" /><br /><br />
        <input type="number" placeholder="Valor aluguel por dia" /><br /><br />

        <button type="submit">Salvar Item</button>
      </form>
    </Layout>
  );
}

export default CadastroItem;