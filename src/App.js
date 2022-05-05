import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import firebaseApp from "./firebase.js";

const auth = firebaseApp.auth();

function App() {
  const [emailSignup, setEmailSignup] = useState('');
  const [passSignup, setPassSignup] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(emailSignup, passSignup).then((cred) => {
      setCurrentUser(cred);
    });
  }
  const handleLogin = () => {
    auth.signInWithEmailAndPassword(emailLogin, passLogin).then((cred) => {
      setCurrentUser(cred);
    });
  }

  const handleLogout = () => {
    auth.signOut();
    setCurrentUser(null);
  }

  return (
    <div className="App">
      Nyudles

      <div>Hello {currentUser ? currentUser.user.email: ''}</div>

      <h2>Sign Up</h2>
      Email: <input
      onInput={
        (text) => {
          setEmailSignup(text.target.value)
        }
      }
      />
      Pessword: <input
      type="password"
      onInput={
        (text) => {
          setPassSignup(text.target.value)
        }
      }
      />
      <button
        onClick = {handleSignup}
      >Sign Up</button>


      <h2>Log In</h2>
      Email: <input
      onInput={
        (text) => {
          setEmailLogin(text.target.value)
        }
      }
      />
      Pessword: <input
      type="password"
      onInput={
        (text) => {
          setPassLogin(text.target.value)
        }
      }
      />
      <button
        onClick = {handleLogin}
      >Log In</button>
    
      <button
        onClick = {handleLogout}
      >Log Out</button>
    
    </div>

  );
}

export default App;
