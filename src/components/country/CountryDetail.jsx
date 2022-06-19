import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 전체 틀
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 75vh;
`;
// 설명 박스
const Box = styled.div`
  overflow: hidden;
  width: 400px;
  height: 500px;
  border: 3px solid black;
  border-radius: 15px;
  box-shadow: 10px 10px 10px 0;
`;
// 국기 img
const Img = styled.img`
  border: 1px solid black;
  width: 400px;
  height: 300px;
  display: block;
`;
// 국가명
const Title = styled.h1`
  display: block;
  text-align: center;
  font-size: 30px;
`;
// 해당국가 수도명
const Capital = styled(Title)`
  font-size: 24px;
`;
const Cash = styled(Title)`
  font-size: 18px;
`;
// Back 버튼
const Btn = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  background-color: #fff;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;
function CountryDetail() {
  const nav = useNavigate();
  const handleClickBack = () => nav("/country");
  return (
    <Container>
      <Box>
        <Img
          src="https://mblogthumb-phinf.pstatic.net/20160127_177/krazymouse_1453865104404DjQIi_PNG/%C4%AB%C4%AB%BF%C0%C7%C1%B7%BB%C1%EE_%B6%F3%C0%CC%BE%F0.png?type=w2"
          alt=""
        />
        <Title>한국</Title>
        <Capital>(Seoul)</Capital>
        <Cash>$</Cash>
        <Btn onClick={handleClickBack}>Back</Btn>
      </Box>
    </Container>
  );
}

export default CountryDetail;
