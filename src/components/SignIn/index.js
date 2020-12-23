import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

//import { Button } from '@material-ui/core';
// import { SignUpLink } from '../SignUp';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/images/login.jpg';
import Alert from 'react-bootstrap/Alert';



const SignInPage = () => (
  <section className="login-page">
    <Container fluid>
      <Row className="justify-content-md-center">

        <Col xs={12} md={12} className="login-img">
          <Image src={logo} alt="Logo" roundedCircle /><p className="login-title">Impact Terra</p>
        </Col>
        <Col xs={12} md={12}>
          <p className="login-disc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </Col>
      </Row>
      <SignInForm />
    </Container>
  </section>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  errors: {},
  input: {},
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.validate()) {
      const { email, password } = this.state;

      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          this.setState({ error });
        });
      }
  };

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your comment.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
}

  onChange = event => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (


      <form onSubmit={this.onSubmit}>
        {error && <Alert variant="danger">
          {error.message}
        </Alert>}

        <Form.Group as={Row}>
          <Form.Label column sm="12">
            Email
          </Form.Label>
          <Col sm="12">
            <Form.Control name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              required
              placeholder="Email Address" />
          </Col>
          <div className="text-danger">{this.state.errors.email}</div>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="12">
            Password
          </Form.Label>
          <Col sm="12">
            <Form.Control name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              required
              placeholder="Password" />
          </Col>
        </Form.Group>
        <Row>
          <Col>
            <Button className="login-btn" color="primary" disabled={isInvalid} onClick={this.onSubmit}>Sign In</Button>
          </Col>
        </Row>

      </form>

    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
