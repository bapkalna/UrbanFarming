import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ANIMALS } from '../shared/animals';
import { GARDENS } from '../shared/gardens';
import { BEES } from '../shared/bees';


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: ANIMALS,
            gardens: GARDENS,
            bees: BEES   
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#D5E9D7'}}>
                <RenderItem 
                    item={this.state.animals.filter(animal => animal.featured)[0]}
                />
                <RenderItem 
                    item={this.state.gardens.filter(garden => garden.featured)[0]}
                />
                <RenderItem 
                    item={this.state.bees.filter(bee => bee.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;