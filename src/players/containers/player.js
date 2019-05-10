import React,{Component} from 'react';
import Video from 'react-native-video';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import VideoLayout from '../components/video-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
class Player extends Component{
    state = {
        loading: true
    }
    onBuffer = ({isBuffering}) => {
        this.setState({
            loading: isBuffering
        });
    }
    playPause = () => {

    }
    render(){
       return(
        <VideoLayout
            loading={this.state.loading}
            video={
                <Video
                source={{uri: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                resizeMode='contain'
                style={styles.video}
                onBuffer={this.onBuffer}
                /> 
            }
            loader={
                <ActivityIndicator color="red" />
            }
            controls={
                <ControlLayout>
                  <PlayPause 
                    onPress={this.playPause}
                  />
                  <Text>Progress bar</Text>
                  <Text>Time left</Text>
                  <Text>Full screen</Text>
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