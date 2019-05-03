import React, {Component} from 'react';
import {
    FlatList, Text
} from 'react-native';
import SuggestionLayout from '../components/suggestions-layout';
import Suggestion from '../components/suggestion';

class Suggestions extends Component {
    render(){
        const list = [
            {
                title: 'Dualwer',
                key: '1'
            },
            {
                title: 'Gómez',
                key: '2'
            }
        ];
        return(
            <SuggestionLayout 
                title="Recomendado para tí" >
                <FlatList 
                    data={list}
                    renderItem={({item})=> <Text>{item.title}</Text>}
                />
            </SuggestionLayout>

            
           
        );
    }
}

export default Suggestions;