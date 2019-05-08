import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HSeparator(props){
    return (
        <View style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    }
});

export default HSeparator;