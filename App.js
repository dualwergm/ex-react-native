/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Suggestions from './src/videos/containers/suggestions';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestions: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    console.log(movies);
    this.setState({
      suggestions: movies,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Searcher</Text>
        <Text>Categories</Text>
        <Suggestions 
          list={this.state.suggestions}
        />
      </Home>
    );
  }
}