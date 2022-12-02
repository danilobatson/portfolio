import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import classnames from 'classnames';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from 'reactstrap';

// core components
import ExamplesNavbar from '../components/ExamplesNavbar';
import Footer from '../components/Footer.js';

import Image from 'next/image';
import Link from 'next/link.js';

const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' };
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

const carouselItems = [
  {
    src: require('assets/img/denys.jpg'),
    altText: 'Slide 1',
    caption: 'Big City Life, United States',
  },
  {
    src: require('assets/img/fabien-bazanegue.jpg'),
    altText: 'Slide 2',
    caption: 'Somewhere Beyond, United States',
  },
  {
    src: require('assets/img/mark-finn.jpg'),
    altText: 'Slide 3',
    caption: 'Stocks, United States',
  },
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      let tables = document.querySelectorAll('.table-responsive');
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle('profile-page');
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off';
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
      document.body.classList.toggle('profile-page');
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <Container className='wrapper'>
        <div>
          <Container className='align-items-center'>
            <div className='content-center'>
              <Row className='row-grid justify-content-between align-items-center text-left'>
                <Col className='mt-5 pt-5' lg='6' md='6'>
                  <div className='about-section text-white mb-3'>
                    <h2>Danilo Batson's Portfolio</h2>
                    <h4>About Me</h4>
                    <p>
                      I'm Danilo Batson and I am a full stack web developer. I'm
                      currently working on my portfolio and learning new skills
                      everyday. I'm looking for next positiont that will
                      continue allow to me grow as a web developer to boost the
                      foundation I have in place.
                    </p>
                    <p className='pt-1'>
                      I currently work full-time at a startup called{' '}
                      <Link href='https://www.mongooseresearch.com/'>
                        Mongoose Research
                      </Link>{' '}
                      as a Software Engineer where I work on our platform's
                      integrations and chat platform. Before working at Mongoose
                      Research, I worked at{' '}
                      <Link href='https://www.creditkey.com/'>Credit Key</Link>{' '}
                      as a Frontend Developer.
                    </p>
                    <p className='pt-1'>
                      Prior to starting my coding career, I launched a nonprofit
                      right after the start of COVID-19 called{' '}
                      <Link href='https://www.spicygreenbook.org/'>
                        Spicy Green Book
                      </Link>
                      to help empower Black-owned businesses. In creating and
                      running this nonprofit I quickly learned the various
                      aspects of running a tech startup.
                    </p>
                    <div className='mt-4'>
                      <small>Spicy Green Book</small>
                      <p className='pt-1'>
                        Spicy Green Book is a completely volunteer based native
                        mobile ap and web app that helps people discover
                        Black-owned restaurants near them. I worked with various
                        volunteer product/project managers, designers,
                        photographers, marketers, videographers, and programmers
                        all collaborating to help bring a software product to
                        market.
                      </p>
                      <p className='pt-1'>
                        We were constantly onboarding new people and quickly
                        integrating them into our workflow. We could always use
                        more programmers so I decided to learn how to code so I
                        could help.
                      </p>
                    </div>
                    <div className='mt-4'>
                      <small>Developer Beginnings</small>

                      <p className='pt-1'>
                        I did a lot of self-teaching as well as enrolling myself
                        in a coding camp! I have several certifications from{' '}
                        <Link href='https://fullstackopen.com/'>
                          Full Stack Open,{' '}
                        </Link>
                        <Link href='https://zerotomastery.io//'>
                          ZeroToMastery,{' '}
                        </Link>
                        <Link href='https://www.codecademy.com/'>
                          Codecademy,{' '}
                        </Link>
                        <Link href='https://www.udemy.com/'>Udemy, </Link>
                        <Link href='https://www.theodinproject.com/'>
                          The Odin Project,{' '}
                        </Link>
                        and{' '}
                        <Link href='https://www.spicygreenbook.org/'>
                          Free Code Camp.
                        </Link>{' '}
                        I have quickly learned that I really enjoy programming
                        and have continued to contribute to Spicy Green Book as
                        well as other various projects.
                      </p>
                      <p className='pt-1'>
                        I definitely have a passion for programming and would
                        like to make it into a career. Please consider bringing
                        me into your organization. I learn fast and am looking
                        forward to being a value-added employee as fast as
                        possible!
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg='4' md='5' className='pt-0'>
                  <Image
                    alt='...'
                    className='img-fluid'
                    src={require('assets/img/Danilo.jpeg')}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='section'>
          <Container>
            <Row className='justify-content-between'>
              <Col md='6'>
                <Row className='justify-content-between align-items-center'>
                  <Image
                    alt='...'
                    className='img-fluid'
                    src={require('assets/img/fabien-bazanegue.jpg')}
                  />{' '}
                </Row>
              </Col>
              <Col md='5'>
                <h1 className='profile-title text-left'>Projects</h1>
                <h5 className='text-on-back'>02</h5>
                <p className='profile-description text-left'>
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className='btn-wrapper pt-3'>
                  <Button
                    className='btn-simple'
                    color='primary'
                    href='#pablo'
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='tim-icons icon-book-bookmark' /> Bookmark
                  </Button>
                  <Button
                    className='btn-simple'
                    color='info'
                    href='#pablo'
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className='tim-icons icon-bulb-63' /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className='section'>
          <Container>
            <Row>
              <Col md='6'>
                <Card className='card-plain'>
                  <CardHeader>
                    <h1 className='profile-title text-left'>Contact</h1>
                    <h5 className='text-on-back'>03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md='6'>
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue='Mike' type='text' />
                          </FormGroup>
                        </Col>
                        <Col md='6'>
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder='mike@email.com' type='email' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='6'>
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue='001-12321345' type='text' />
                          </FormGroup>
                        </Col>
                        <Col md='6'>
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue='CreativeTim' type='text' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='12'>
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder='Hello there!' type='text' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className='btn-round float-right'
                        color='primary'
                        data-placement='right'
                        id='tooltip341148792'
                        type='button'
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement='right'
                        target='tooltip341148792'
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className='ml-auto' md='4'>
                <div className='info info-horizontal'>
                  <div className='icon icon-primary'>
                    <i className='tim-icons icon-square-pin' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Find us at the office</h4>
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
                    </p>
                  </div>
                </div>
                <div className='info info-horizontal'>
                  <div className='icon icon-primary'>
                    <i className='tim-icons icon-mobile' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Give us a ring</h4>
                    <p>
                      Michael Jordan <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Container>
    </>
  );
}
