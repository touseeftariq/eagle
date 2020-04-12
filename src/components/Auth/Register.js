import React, { Component } from 'react';
import {
  Grid,
  Icon,
  Header,
  Form,
  Segment,
  Button,
  Message,
  Transition,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    this.setState({ visible: true });
  }

  handleChange = () => {};
  render() {
    const { visible } = this.state;
    return (
      <Grid className='app' textAlign='center' verticalAlign='middle'>
        <Transition visible={visible} animation='scale' duration={3000}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' icon color='black' textAlign='center'>
              <Icon name='diamond' color='yellow' />
              Register for Eagle
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  type='text'
                  name='username'
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  type='email'
                  name='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email Address'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  type='password'
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  type='password'
                  name='passwordConfirmation'
                  icon='repeat'
                  iconPosition='left'
                  placeholder='Password Confirmation'
                  onChange={this.handleChange}
                />
                <Button color='yellow' fluid size='large'>
                  Submit
                </Button>
              </Segment>
            </Form>
            <Message>
              Already a user? <Link to='/login'>Login</Link>
            </Message>
          </Grid.Column>
        </Transition>
      </Grid>
    );
  }
}

export default Register;
