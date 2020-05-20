import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header"
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />

          <Route path="/login" component={LoginForm} />
          {/* <Route component={LoginForm} /> */}
        </Switch>
      </section>
    </div>
  );
}

export default App;
