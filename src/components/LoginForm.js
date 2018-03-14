import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import { Container, Header, Body, Title, Content, Form,Item,Input, Button, Text, Label } from 'native-base';
import {Actions} from 'react-native-router-flux';

class LoginForm extends Component{

  onPressButton(){
    Actions.push('dashboard');
  }

    render(){
        return(
          
            <Container style={{ marginTop: StatusBar.currentHeight}}>
        <Header>
        <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center'  }}>
          <Title>Login</Title>
        </Body>
      </Header>
      <Content>
          <Form>
          <Item floatingLabel>
          <Label>Usuario</Label>
          <Input />
        </Item>
            <Item floatingLabel last>
            <Label>Password</Label>
              <Input  />
            </Item>
            
            <Button block onPress={this.onPressButton.bind(this)}>
            <Text>Ingresar</Text>
          </Button>
          
          </Form>
        </Content>
      </Container>
      
        );
    }
}

export default LoginForm;