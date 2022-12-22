import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../comps/AuthContext';
import firebase from '../firebase/clientApp';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { login, signup, currentUser } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter email and password');
    }

    if (e.nativeEvent.submitter.name === 'login') {
      try{
        await login(email, password);
        await router.push('/');
      } catch (err) {
        setError('Incorrect email or password')
      }
    } else {
        try{
          await signup(email, password);
          await router.push('/');
        } catch (err) {
          setError('Account already exists')
        }
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
        >
        </input>
        <p>Password</p>
        <input 
          value={password} 
          type='password' 
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password'
        >
        </input><br></br>
        <input type='submit' value='Log in' name='login'></input>
        <input type='submit' value='Sign up' name='signup'></input>
      </form>
    </div>
  )
}

export default SignInScreen;