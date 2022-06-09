import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 80vw;
  height: 70vh;
  /* border: 1px solid black; */
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23vw;
  height: 25vh;
  margin: auto 5px;
  border: none;
  border-radius: 50%;
  transition: 1s;
  background-color: #000;
  cursor: pointer;
`;

const BtnSelect = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  height: 17vh;
  margin: auto 5px;
  border: none;
  background-color: #fff;
  border-radius: 50%;
  transition: 1s;
  cursor: pointer;
`;

function CountryPage() {
  return (
    <Container>
      <Box>
        <Btn>
          <BtnSelect>유럽</BtnSelect>
        </Btn>
        <Btn>
          <BtnSelect>아프리카</BtnSelect>
        </Btn>
        <Btn>
          <BtnSelect>아메리카</BtnSelect>
        </Btn>
      </Box>
      <Box>
        <Btn>
          <BtnSelect>아시아</BtnSelect>
        </Btn>
        <Btn>
          <BtnSelect>오세아니아</BtnSelect>
        </Btn>
      </Box>
    </Container>
  );
}

export default CountryPage;
