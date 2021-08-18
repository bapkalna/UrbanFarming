import React, { Component } from 'react';
import { FlatList, Image, Tile } from 'react-native';
import { ListItem } from 'react-native-elements';
import { BLOGS } from '../shared/blogs';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: BLOGS
        };
    }

    static navigationOptions = {
        title: 'Blogs'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderBlogItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('Blog', { blogId: item.id })}
                />
            );
        };

        return (
            <FlatList
                data={this.state.blogs}
                renderItem={renderBlogItem}
                keyExtractor={item => item.id.toString()}
                style={{ backgroundColor: '#D5E9D7'}}
            />
        );
    }
}

export default Blog;