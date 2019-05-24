import React, {Component} from 'react';
import MovieLayout from '../components/movie-layout';
import Player from '../../players/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';
import {Animated} from 'react-native';

import {connect} from 'react-redux';

class Movie extends Component {
    state = {
        opacity: new Animated.Value(0)
    };
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null
            }
        })
    }
    componentDidMount(){
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000     
            }
        ).start();
    }
    render(){
        return (
            <Animated.View
                styles={{
                    flex: 1,
                    opacity: this.state.opacity
                }}
            >
                <MovieLayout>
                    <Header>
                        <Close 
                            onPress={this.closeVideo}
                        />
                    </Header>
                    <Player />
                    <Details {...this.props.movie}/>
                </MovieLayout>                
            </Animated.View>
        );
    }
}

function mapStateToProps(state){
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);