import React,{Component} from 'react';
import Video from 'react-native-video';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import VideoLayout from '../components/video-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import Fullscreen from '../components/fullscreen';

class Player extends Component{
    state = {
        loading: true,
        paused: false,
        fullscreen: false
    }
    onBuffer = ({isBuffering}) => {
        this.setState({
            loading: isBuffering
        });
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        });
    }
    fullscreen = () =>{
        this.setState({
            fullscreen: !this.state.fullscreen
        });
    }
    render(){
       return(
        <VideoLayout
            loading={this.state.loading}
            video={
                <Video
                    source={{uri: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                    resizeMode={this.state.fullscreen ? 'contain' : 'cover'}
                    style={styles.video}
                    onBuffer={this.onBuffer}
                    paused={this.state.paused}
                /> 
            }
            loader={
                <ActivityIndicator color="red" />
            }
            controls={
                <ControlLayout>
                  <PlayPause 
                    onPress={this.playPause}
                    paused={this.state.paused}
                  />
                  <Text>Progress bar</Text>
                  <Text>Time left</Text>
                  <Fullscreen 
                    fullscreen={this.state.fullscreen}
                    onPress={this.fullscreen}
                  />
                </ControlLayout>
            }
            >
        </VideoLayout>
       );     
    };
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
});

export default Player;