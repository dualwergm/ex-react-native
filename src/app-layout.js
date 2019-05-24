import React, {Component} from 'react';
import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import Suggestions from './videos/containers/suggestions';
import Categories from './videos/containers/categories';
import Movie from './screens/containers/movie';
import Search from '../src/sections/containers/search';

import {connect} from 'react-redux';

class AppLayout extends Component {
    async componentDidMount(){
        const categories = await API.getMovies();
        this.props.dispatch({
            type: 'SET_CATEGORIES',
            payload: {
            categories
            }
        });

        const suggestions = await API.getSuggestion(10);
        this.props.dispatch({
            type: 'SET_SUGGESTIONS',
            payload: {
            suggestions
            }
        });
    }
    render(){
        if(this.props.selectedMovie){
            return <Movie />
        }
        return (
            <Home>
                <Header />
                <Search />
                <Categories />
                <Suggestions />
            </Home>
        );
    }
}

function mapStateToProps(state){
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(AppLayout);