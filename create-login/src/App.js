import React from 'react';
import { Link } from "react-router-dom"
import './App.css';

import LoginForm from "./components/LoginForm"
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link>Login</Link>
          <Link>Secured Page</Link>
        </nav>
      </header>
      <section>
        <LoginForm />
        <FriendsList />
      </section>
    </div>
  );
}

export default App;
