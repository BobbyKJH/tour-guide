import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
