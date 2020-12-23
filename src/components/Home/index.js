import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withAuthorization, withEmailVerification } from '../Session';
import SignOutButton from '../SignOut';

import { Container, Row, Col } from 'react-bootstrap';
import post from '../../assets/images/08.jpg';
import secondpost from '../../assets/images/media-2.jpg';
import logo from '../../assets/images/home-logo.jpg';
import farm1 from '../../assets/images/farm-1.jpg';
import farm2 from '../../assets/images/farm-2.jpg';
import farm3 from '../../assets/images/farm-3.jpg';
import farm4 from '../../assets/images/farm-4.jpg';
import Media from 'react-bootstrap/Media';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Icon from '@material-ui/core/Icon';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



const HomePage = () => (

  <section className="home-page">


    <Navbar expand="lg" variant="light" className="bg-main" fixed="top">
      <Container>
        <Navbar.Brand className="nav-logo"><img src={logo}></img> Golden Paddy</Navbar.Brand>
        <div className="nav-right-icon">
          <NotificationsNoneOutlinedIcon />
          <SignOutButton />
        </div>
      </Container>
    </Navbar>

    <Container>
      <div className="media-section border-outer">
        <Media>
          <img
            width={80}
            height={80}
            className="mr-3"
            src={post}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>What is Lorem Ipsum?</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting industry.
            </p>
            <a href="javascript:void(0)">Read more <ChevronRightIcon/></a>
          </Media.Body>
        </Media>
      </div>
      <div className="image-section border-outer">
        <Row>
          <Col xs={6} md={6}>
            <h5>Lorem ipsum title</h5>
            <Image src={farm1} fluid />
          </Col>
          <Col xs={6} md={6}>
            <h5>Lorem ipsum title</h5>
            <Image src={farm2} fluid />
          </Col>
        </Row>
      </div>
      <div className="media-section border-outer">
        <Media>
          <img
            width={80}
            height={80}
            className="mr-3"
            src={secondpost}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>What is Lorem Ipsum?</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and type setting industry.
            </p>
            <a href="javascript:void(0)">Read more <ChevronRightIcon/></a>
          </Media.Body>
        </Media>
      </div>
      <div className="image-section border-outer">
        <Row>
          <Col xs={6} md={6}>
            <h5>Lorem ipsum title</h5>
            <Image src={farm3} fluid />
          </Col>
          <Col xs={6} md={6}>
            <h5>Lorem ipsum title</h5>
            <Image src={farm4} fluid />
          </Col>
        </Row>
      </div>
    </Container>

    <Navbar expand="lg" variant="light" className="bottom-menu" fixed="bottom">
      <Container>
        <Row>
          <Col sm="4" xs="4">
            <div className="bottom-icon active">
              <HomeRoundedIcon />
              <p>Home</p>
            </div>
          </Col>
          <Col sm="4" xs="4">
            <div className="bottom-icon">
              <AddCircleRoundedIcon />
              <p>Sell</p>
            </div>
          </Col>
          <Col sm="4" xs="4">
            <div className="bottom-icon">
              <AccountCircleRoundedIcon />
              <p>Profile</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>

  </section>
);

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(HomePage);


