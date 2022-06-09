import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  background-color: #adb5bd;
  border-radius: 15px;
  width: 80vw;
  margin: 10px auto;
  margin-bottom: 0;
`;
const Title = styled.div`
  display: block;
  text-align: center;
  padding: 15px 0;
  font-size: 48px;
`;
const Menu = styled.div`
  display: flex;
`;
const Nav = styled.div`
  display: block;
  width: 20vw;
  padding: 10px 0;
  text-align: center;
  font-size: 24px;
  &:hover {
    text-decoration: underline;
  }
`;

function Navigation() {
  return (
    <Container>
      <Title>
        <Link to="/">Tour Guide</Link>
      </Title>
      <Menu>
        <Link to="/recommend">
          <Nav>추천</Nav>
        </Link>
        <Link to="/country">
          <Nav>나라</Nav>
        </Link>
        <Link to="/continent">
          <Nav>대륙</Nav>
        </Link>
        <Link to="/exchange">
          <Nav>환전</Nav>
        </Link>
      </Menu>
    </Container>
  );
}

export default Navigation;
