import React from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';

import LoginForm from "./components/LoginForm"
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Secured Page</Link>
        </nav>
      </header>
      <section>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/friends">
          <FriendsList />
        </Route>
      </section>
    </div>
  );
}

export default App;
