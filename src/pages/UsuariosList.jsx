import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

// 1. O useEffect encapsula a busca
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://locatehub-bff.greenmoss-1512f455.eastus2.azurecontainerapps.io
/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Erro ao carregar usuários:', error);
      }
    };

    fetchData();
  }, []); // [] garante que rode apenas uma vez ao abrir a página

  const handleEditar = (id) => {
    navigate(`/editar-usuario/${id}`);
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Deseja mesmo excluir?")) {
      try {
        const response = await fetch(`https://locatehub-bff.greenmoss-1512f455.eastus2.azurecontainerapps.io
/users/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setUsuarios(usuarios.filter(u => u.id !== id));
          alert("Usuário excluído!");
        }
      } catch (error) {
        // variável para sumir o aviso do console
        console.error("Erro ao deletar:", error);
        alert("Erro na exclusão.");
      }
    }
  };

  return (
    <Layout>
      <h1>Gestão de Usuários</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p><strong>{usuario.nome}</strong> ({usuario.email})</p>
          <button onClick={() => handleEditar(usuario.id)}>Editar</button>
          <button onClick={() => handleExcluir(usuario.id)}>Excluir</button>
        </div>
      ))}
    </Layout>
  );
}

export default UsuariosList;