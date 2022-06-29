// React
import { Link } from "react-router-dom";
import { Container, Home } from "../style/FooterStyle";

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
