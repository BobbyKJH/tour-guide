import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: block;
  width: 100%;
  background: #000;
  color: #fff;
  div {
    width: 100%;
    max-width: 1440px;
    border: 1px solid white;
    margin: 0 auto;
  }
  h1 {
    display: inline-block;
    width: 40%;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;
  }
  h2 {
    display: inline-block;
    width: 15%;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;

    &:hover {
      border-bottom: 4px solid #fff;
    }
  }
`;
