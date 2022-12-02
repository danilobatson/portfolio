import React, { useEffect, useState } from 'react';
// reactstrap components
import { Button, Collapse, Navbar, NavItem, Nav, Container } from 'reactstrap';

import Image from 'next/image';

import linkedin from 'assets/img/linkedin.svg';
import github from 'assets/img/github.svg';
import email from 'assets/img/email.svg';

export default function ExamplesNavbar() {
  const [color, setColor] = useState('navbar-transparent');

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return function cleanup() {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor('bg-success');
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor('navbar-transparent');
    }
  };

  return (
    <Navbar className={'fixed-top ' + color} color-on-scroll='100' expand='lg'>
      <Container className={'justify-content-end '} navbar isOpen={true} navbar>
        <Nav>
          <NavItem>
            <Button
              className='btn-round nav-link'
              color='info'
              target='_blank'
              href='mailto:djbatson19@gmail.com'
            >
              <Image alt='email' width={25} height={25} src={email} />
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className='btn-round nav-link'
              color='info'
              target='_blank'
              href='https://github.com/danilobatson'
            >
              <Image alt='github' width={25} height={25} src={github} />
            </Button>
          </NavItem>
          <NavItem>
            <Button
              className='btn-round nav-link'
              color='info'
              target='_blank'
              href='https://www.linkedin.com/in/danilo-batson/'
            >
              <Image alt='linkedin' width={25} height={25} src={linkedin} />
            </Button>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
