import { useState } from 'react';
import './Login.css';
import { createUser } from './LoginApi'; // Importera createUser från LoginApi

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleCreateUser = async () => {
    const success = await createUser(username, password);
    if (success) {
      setMessage('Användaren skapades');
    } else {
      setMessage('Kunde inte skapa användare, användarnamn existerar redan');
    }
  };

  return (
    <section className="login">
      <p>Logga in/ skapa ny användare</p>
      <input
        type="text"
        placeholder="Användarnamn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreateUser}>Skapa ny användare</button>
      <button>Login</button>
      <p>{message}</p>
    </section>
  );
}

export default Login;