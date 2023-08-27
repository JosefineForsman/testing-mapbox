import { useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './Login.css';
import { createUser } from './LoginApi'; // Importera createUser från LoginApi
import { logInUser } from './AuthApi';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [userCreated, setUserCreated] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const handleLogin = async () => {
    const data = await logInUser(username, password);
    console.log(data);

    if (data.success) {
      setLoginMessage('Du är nu inloggad!');
      if (data.token) setToken(data.token);
      console.log(token);
    } else {
      setLoginMessage('Du kunde inte logga in');
    }

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Login Message:', loginMessage);
    console.log('Token:', token);
  };

  const handleCreateUser = async () => {
    const success = await createUser(username, password);
    if (success) {
      setUserCreated(username);
      setMessage(`Användaren ${username} skapades`);
    } else {
      setMessage('Kunde inte skapa användare, användarnamn existerar redan');
    }
  };
  console.log(userCreated)

  return(

  <section className='login'>
      <h1>Logga in / Skapa ny användare</h1>
      <input type="text" placeholder='Användarnamn' value={username} onChange={(e => setUsername(e.target.value))} />
      <input type="password" placeholder='Lösenord' value={password} onChange={(e => setPassword(e.target.value))} />
      <aside className='login-messages'>
        <p>{message}</p>
        <button onClick={handleCreateUser}>Skapa användare</button>
        <button onClick={handleLogin}>Logga in</button>
      </aside>
      <UserInfo token={token} />
    </section>
  )
}

export default Login;