import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from './navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

export default function App(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Stack gap={4}>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='secondary'>Secondary</Button>{' '}
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='success' onClick={() => setOpen(!open)}>
              Collapse
            </Button>
            <Collapse in={open}>
              <div id='example-collapse-text'>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='secondary'>Secondary</Button>{' '}
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='secondary'>Secondary</Button>{' '}
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='secondary'>Secondary</Button>{' '}
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='secondary'>Secondary</Button>{' '}
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <Button variant='secondary'>Secondary</Button>{' '}
          </Col>
          <Col>
            {' '}
            <Button variant='primary'>Primary</Button>{' '}
          </Col>
        </Row>
      </Container>
    </Stack>
  );
}
