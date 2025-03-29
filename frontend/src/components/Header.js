import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'silver',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '40rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
