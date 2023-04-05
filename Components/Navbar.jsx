import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" className="logo">
          <span className="pt_01">مكت</span>
          <span className="pt_02">بتي</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: "100px", marginTop: "20px !important" }}
            navbarScroll
          >
            <Link href="/">الرئيسية</Link>
            <a href="#About">عنا</a>
            <Link href="/shop">تسوق</Link>
            <Link href="/cart">سلة المشتريات</Link>
            <Link href="/stories">قصص وحواديت</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
