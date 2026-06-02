import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/itens');
  };

  return (
    <div 
      style={{ 
        maxWidth: '400px', 
        margin: '100px auto', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 🌟 Centraliza o H1 e o Botão horizontalmente
        justifyContent: 'center',
        gap: '20px',          // Dá um espaço perfeito entre o título e o botão
        padding: '40px 20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}
    >
      <h1 style={{ color: '#2c3e50', margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
        LOCATE HUB - CLOUD
      </h1>

      <button 
        onClick={handleLogin}
        style={{ 
          cursor: 'pointer', 
          padding: '12px 30px', 
          fontSize: '16px',
          backgroundColor: '#2196f3', // Azul padrão Azure para combinar com o projeto
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          width: '100%',
          maxWidth: '200px',        // Limita a largura do botão para ficar proporcional
          transition: 'background-color 0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;