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
    position: relative;
    cursor: pointer;
    span {
      padding: 20px 0;
      display: block;
      color: #fff;
    }
    nav {
      display: none;
    }
    div {
      position: absolute;
      display: flex;
      flex-direction: column;
    }
    &:hover {
      border: 4px solid #fff;
      span {
        display: inline-block;
        text-align: center;
      }
      nav {
        display: block;
        /* width: 10%; */
        color: #000;
      }
    }
  }
`;
