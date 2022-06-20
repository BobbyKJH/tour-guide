// React
import React, { useState } from "react";
import styled from "styled-components";
// Components
import CountryList from "../components/country/CountryList";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { asia, eu, america, africa, oceania } from "../store/countrySlice";

const Container = styled.div`
  display: block;
  margin: 0 auto;
`;
// Button 그룹화
const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 대륙 선택 Button
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
      <BtnGroup>
        <Btn onClick={Asia}>아시아</Btn>
        <Btn onClick={Eu}>유럽</Btn>
        <Btn onClick={America}>아메리카</Btn>
      </BtnGroup>
      <BtnGroup>
        <Btn onClick={Africa}>아프리카</Btn>
        <Btn onClick={Oceania}>오세아니아</Btn>
      </BtnGroup>
      {/* 대륙 리스트 */}
      <CountryList countryList={country} />
    </Container>
  );
}

export default CountryPage;
