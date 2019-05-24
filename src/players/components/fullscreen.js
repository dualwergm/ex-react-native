import React from 'react';
import { TouchableHighlight, StyleSheet, Image} from 'react-native';

function Fullscreen(props){
    return (
        <TouchableHighlight
            onPress={props.onPress}
        >
        {
            props.fullscreen ?
            <Image style={styles.img} source={require('../../../assets/exit-full-screen.png')} />
            :
            <Image style={styles.img} source={require('../../../assets/full-screen.png')} />
        }    
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    img: {
        resizeMode: 'contain',
        height: 18,
        width: 18
    }
});

export default Fullscreen;