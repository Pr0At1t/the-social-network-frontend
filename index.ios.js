import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Login from './src/components/login/index';
import userReducer from './src/reducers/user';
import App from './src/app';

const store = createStore(
    combineReducers({ userReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const client = () => (
    <Provider store={store}>
        <Login />
    </Provider>
);

AppRegistry.registerComponent('client', () => client);
