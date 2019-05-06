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
    renderItem = ({item}) => {
        return (
            <Suggestion {...item} />
        );
    }
    keyExtractor = item => `${item.id}`
    render(){
        return(
            <SuggestionLayout 
                title="Recomendado para tí" >
                <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderItemSeparator}
                    renderItem={this.renderItem}
                />
            </SuggestionLayout>

            
           
        );
    }
}

export default Suggestions;