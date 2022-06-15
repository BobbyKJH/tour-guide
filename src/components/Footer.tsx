import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  margin: 0 auto;
  width: 100vw;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
`;
const Home = styled.div`
  display: block;
  font-size: 48px;
`;

function Footer() {
  return (
    <Container>
      <Home>
        <Link to="/">Tour Guide</Link>
      </Home>
    </Container>
  );
}

export default Footer;
