/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import SideMenu from './src/router/Navigation';
import {Provider} from 'react-redux';
import store from './src/configStore';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SideMenu/>
            </Provider>
        );
    }
}

