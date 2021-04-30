import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from "react-router-dom"
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#dcae96",
        borderBottom: "3px solid #00004d",

        display: "flex",
        justifyContent: "space-between",
        opacity: "0.9",
        padding: "0",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
          <motion.img
            src={logo}
            alt="logo"
            height="90vh"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ margin: "5px" }}
            id="headerlogo"
              
            />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              href="/"
              className="link"
              style={{ color: "#00004d", textDecoration: "none" }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="/catering"
              className="link"
              style={{ color: "#00004d", textDecoration: "none" }}
            >
              Catering
            </Nav.Link>
            <Nav.Link
              href="/services"
              className="link"
              style={{ color: "#00004d", textDecoration: "none" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="link"
              style={{ color: "#00004d", textDecoration: "none" }}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <motion.a href="/" className="social fb" style={{ color: "#4267B2" }} whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/Radhas_Cooking/"
              className="social instagram"
              style={{ color: "#cd486b" }}
              whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
            href="/"
              className="social twitter"
              style={{ color: "#1DA1F2" }}
              whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            >
              <TwitterIcon />
            </motion.a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
