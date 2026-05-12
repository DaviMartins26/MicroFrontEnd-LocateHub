import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import ItensList from '../pages/ItensList';
import CadastroItem from '../pages/CadastroItem';
import CadastroUsuario from '../pages/CadastroUsuario';
import UsuariosList from '../pages/UsuariosList';
import ItensAdmin from '../pages/ItensAdmin';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/itens" element={<ItensList />} />
        <Route path="/cadastro-item" element={<CadastroItem />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/usuarios" element={<UsuariosList />} />
        <Route path="/admin-itens" element={<ItensAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;