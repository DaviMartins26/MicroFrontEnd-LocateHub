import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/itens">Itens</Link>
      <Link to="/cadastro-item">Cadastrar Item</Link>
      <Link to="/cadastro-usuario">Cadastrar Usuário</Link>
      <Link to="/usuarios">Usuários</Link>
      <Link to="/admin-itens">Admin Itens</Link>
      <Link to="/relatoio-geral">Mostrar Agregração</Link>

    </nav>
  );
}

export default Navbar;