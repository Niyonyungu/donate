import React from "react";
import { Container} from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
                <h3>Copyright © {year} Donate Purple</h3> 
    </Container>
  );
}

export default Footer;
