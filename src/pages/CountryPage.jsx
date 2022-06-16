import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CountryList from "../components/country/CountryList";
import { asia, eu, america, africa, oceania } from "../store/countrySlice";

const Container = styled.div`
  display: block;
  margin: 0 auto;
`;
const CountryBtn = styled.div`
  display: block;
  text-align: center;
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
      <CountryBtn>
        <button onClick={Asia}>asia</button>
        <button onClick={Eu}>eu</button>
        <button onClick={America}>america</button>
        <button onClick={Africa}>africa</button>
        <button onClick={Oceania}>oceania</button>
      </CountryBtn>

      <CountryList country={country} />
    </Container>
  );
}

export default CountryPage;
