import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import { Container, Header, Body, Title, Content, Form,Item,Input, Button, Text, Label } from 'native-base';
import {Actions} from 'react-native-router-flux';

class Dashboard extends Component{

  onPressButton(){
    Actions.push('login');
  }

    render(){
        return(
            <Container style={{ marginTop: StatusBar.currentHeight}}>
        <Header>
        <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
          <Title>Dashboard</Title>
        </Body>
      </Header>
      <Content>
          
            <Button block onPress={this.onPressButton.bind(this)}>
            <Text>Salir</Text>
          </Button>
        </Content>
      </Container>
        );
    }
}

export default Dashboard;