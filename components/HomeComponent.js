import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { ANIMALS } from "../shared/animals";
import { GARDENS } from "../shared/gardens";
import { BEES } from "../shared/bees";
import Constants from 'expo-constants';

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.name} >
        <Text style={{ margin: 10 }}>{item.description}</Text>
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
      bees: BEES,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#D5E9D7" }}>
        <View style={styles.container}>
        <View style={styles.cardContainer}>
          <RenderItem
            item={this.state.animals.filter((animal) => animal.featured)[0]}
          />
          <RenderItem
            item={this.state.gardens.filter((garden) => garden.featured)[0]}
          />
          <RenderItem item={this.state.bees.filter((bee) => bee.featured)[0]} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 25,
    },
    cardContainer: {
      paddingTop: 30,
      paddingBottom: 30,
      shadowColor: '#D5E9D7',
      shadowOpacity: 10,
      elevation: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      marginTop: 20,
    },
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 20,
    }
  });

export default Home;
