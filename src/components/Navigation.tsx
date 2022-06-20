// React
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: block;
  background-color: gray;
`;
// Home Name
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80px;
  font-size: 48px;
`;
// Side Bar
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 사이트 Nav
const Nav = styled.div`
  display: block;
  text-align: center;
  padding: 15px 0;
  font-size: 24px;
  width: 20vw;
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
