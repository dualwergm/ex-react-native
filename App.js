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
import Categories from './src/videos/containers/categories';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestions: [],
    categories: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestions: movies,
      categories
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>Searcher</Text>
        <Categories 
          list={this.state.categories}
        />
        <Suggestions 
          list={this.state.suggestions}
        />
      </Home>
    );
  }
}