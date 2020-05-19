import React from 'react';
import { Link } from "react-router-dom"
import './App.css';

import LoginForm from "./components/LoginForm"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link>Home Page</Link>
          <Link>Login</Link>
          <Link>Secured Page</Link>
        </nav>
      </header>
      <section>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;
