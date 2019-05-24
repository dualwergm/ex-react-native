import React from 'react';
import {View, StyleSheet} from 'react-native';

function ControlLayout(props){
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,.5)',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    }
});

export default ControlLayout;