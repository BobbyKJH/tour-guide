import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CountryList from "../components/country/CountryList";
import { asia, eu, america, africa, oceania } from "../store/countrySlice";

const Container = styled.div`
  display: block;
  margin: 0 auto;
`;
const CountryMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

function CountryPage() {
  const country = useSelector((state) => state.country.value);
  const dispatch = useDispatch();

  const Asia = () => dispatch(asia());
  const Eu = () => dispatch(eu());
  const America = () => dispatch(america());
  const Africa = () => dispatch(africa());
  const Oceania = () => dispatch(oceania());

  return (
    <Container>
      <CountryMenu>
        <Btn onClick={Asia}>아시아</Btn>
        <Btn onClick={Eu}>유럽</Btn>
        <Btn onClick={America}>아메리카</Btn>
      </CountryMenu>
      <CountryMenu>
        <Btn onClick={Africa}>아프리카</Btn>
        <Btn onClick={Oceania}>오세아니아</Btn>
      </CountryMenu>
      <CountryList countryList={country} />
    </Container>
  );
}

export default CountryPage;
