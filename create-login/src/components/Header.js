import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: lightblue;
  padding: 1%;
`;

export default function Header() {
  return (
    <Navbar>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/protected">Secured Page</Link>
      </nav>
    </Navbar>
  );
}
