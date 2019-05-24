import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import API from '../../../utils/api';

import {connect} from 'react-redux';

class Search extends Component {
    state = {
        text: ''
    };
    handleSubmit = async () => {
        const movies = await API.searchMovie(this.state.text);
        console.log(movies);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        });
    };
    handleChangeText = (text) => {
        this.setState({
            text
        });
    };
    render(){
        return (
            <TextInput 
                style={styles.input}
                placeholder="Busca tu pelicula favorita"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                autoCapitalize="none"
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#eaeaea',
        borderWidth: 1,
        fontSize: 15,
        padding: 15
    }
});

export default connect(null)(Search);