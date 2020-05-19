import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Secured Page</Link>
        </nav>
      </header>
      <section>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />

          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
