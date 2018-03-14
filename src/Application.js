import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

export default class Application extends Component {
  
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
  }
}