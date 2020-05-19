import React from 'react';
import { Link } from "react-router-dom"
import './App.css';

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
        <form>
          <label>Username:</label>
          <input />
          <label>Password:</label>
          <input />
          <button>LOG IN</button>
        </form>
      </section>
    </div>
  );
}

export default App;
