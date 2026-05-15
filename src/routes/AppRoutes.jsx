import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import ItensList from '../pages/ItensList';
import CadastroItem from '../pages/CadastroItem';
import CadastroUsuario from '../pages/CadastroUsuario';
import UsuariosList from '../pages/UsuariosList';
import ItensAdmin from '../pages/ItensAdmin';
import EditarItem from '../pages/EditarItem';
import EditarUsuario from '../pages/EditarUsuario';

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
        <Route path="/editar-item/:id" element={<EditarItem />} />
        <Route path="/editar-usuario/:id" element={<EditarUsuario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;