import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import Category from '../components/category';
import Empty from '../../sections/components/empty';
import HSeparator from '../../sections/components/h-separator';
import LayoutCategory from '../components/categories-layout';

class Categories extends Component {
    keyExtractor = item => `${item.id}`;
    renderEmpty = () => <Empty text="There are not suggestions ):" />
    renderItemSeparator = () => <HSeparator btColor="red" />
    renderItem = ({item}) => {
        return (
            <Category {...item} />
        );
    }
    render(){
        return(
            <LayoutCategory 
                title="Categories">
                    <FlatList
                        horizontal
                        keyExtractor={this.keyExtractor}
                        data={this.props.list}
                        ListEmptyComponent={this.renderEmpty}
                        ItemSeparatorComponent={this.renderItemSeparator}
                        renderItem={this.renderItem}
                    />
            </LayoutCategory>
        );
    };
}

export default Categories;