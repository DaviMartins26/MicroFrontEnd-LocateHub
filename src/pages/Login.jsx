import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Enviar email e senha para o BFF.
    // TODO: Validar usuário.
    // TODO: Salvar token JWT.

    navigate('/itens');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <input
        type="password"
        placeholder="Senha"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;