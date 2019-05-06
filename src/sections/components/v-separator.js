import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function VSeparator(props){
    return (
        <View style={[
            styles.container,
            {
                borderTopColor: props.btColor || '#eaeaea'
            }
        ]}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
    }
});

export default VSeparator;