import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
function Suggestion(props){
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.cover} 
                    source={require('../../../assets/logo.png')}
                />
            </View>
            <View style={styles.right}>

            </View>
        </View>
    )
}

export default Suggestion;