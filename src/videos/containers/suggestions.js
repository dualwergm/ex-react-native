import React, {Component} from 'react';
import {
    FlatList, Text
} from 'react-native';
import SuggestionLayout from '../components/suggestions-layout';
import Suggestion from '../components/suggestion';
import Empty from '../../sections/components/empty';
import VSeparator from '../../sections/components/v-separator'

class Suggestions extends Component {
    renderEmpty = () => <Empty text="There are not suggestions ):" />
    renderItemSeparator = () => <VSeparator btColor="red" />

    render(){
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'Mario Bross',
                key: '2'
            },
            {
                title: 'Dragon balls',
                key: '3'
            }
        ];
        return(
            <SuggestionLayout 
                title="Recomendado para tí" >
                <FlatList 
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    renderItem={({item})=> <Text>{item.title}</Text>}
                />
            </SuggestionLayout>

            
           
        );
    }
}

export default Suggestions;