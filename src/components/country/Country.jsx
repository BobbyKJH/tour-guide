// React
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: inline-block;
  width: 21vw;
  height: 12vw;
  margin: 1vw 1vw;
  border: 1px solid black;
  text-align: center;
`;
// 이미지 크기
const Img = styled.img`
  display: inline-block;
  width: 20vw;
  height: 10vw;
`;
// 국가명
const Title = styled.div`
  display: block;
  font-size: 20px;
  text-align: center;
`;

function Country({ title, img }) {
  return (
    <Container>
      <Img src={img} />
      <Title>
        <Link to={`/country/${title}`}>{title}</Link>
      </Title>
    </Container>
  );
}

export default Country;
