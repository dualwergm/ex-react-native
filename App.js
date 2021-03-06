/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Loading from './src/sections/components/loading';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import AppLayout from './src/app-layout';
type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestions: [],
    // categories: []
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppLayout />  
        </PersistGate>
      </Provider>
    );
  }
}