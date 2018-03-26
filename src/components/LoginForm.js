import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            lable="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
        <Input
          secureTextEntry
          lable="Password"
          placeholder="password"
        />
        </CardSection>

        <CardSection>
          <Button>
          Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
