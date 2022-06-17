import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  width: 21vw;
  height: 12vw;
  margin: 1vw 1vw;
  border: 1px solid black;
  text-align: center;
`;

const Img = styled.img`
  display: inline-block;
  width: 20vw;
  height: 10vw;
`;

const Title = styled.div`
  display: block;
  font-size: 20px;
  text-align: center;
`;

function Country({ title, img }) {
  return (
    <Container>
      <Img src={img} />
      <Title>{title}</Title>
    </Container>
  );
}

export default Country;
