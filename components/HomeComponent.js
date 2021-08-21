import React, { Component } from "react";
import Loading from "./LoadingComponent";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import Constants from "expo-constants";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import MottoCard from './MottoComponent';
import InfoCard from './InfoComponent';
import LoginCard from './LoginCardComponent';

const mapStateToProps = (state) => {
  return {
    animals: state.animals,
    gardens: state.gardens,
    bees: state.bees,
  };
};

function RenderItem(props) {
  const { item } = props;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.errMess) {
    return (
      <View>
        <Text>{props.errMess}</Text>
      </View>
    );
  }

  if (item) {
    return (
      <Card featuredTitle={item.name} image={{ uri: baseUrl + item.image }}>
        <Text >{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}
class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#D5E9D7" }}>
        <MottoCard />
        <LoginCard />
        <InfoCard />
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <RenderItem
              item={
                this.props.animals.animals.filter(
                  (animal) => animal.featured
                )[0]
              }
              isLoading={this.props.animals.isLoading}
              errMess={this.props.animals.errMess}
            />
            <RenderItem
              item={
                this.props.gardens.gardens.filter(
                  (garden) => garden.featured
                )[0]
              }
              isLoading={this.props.gardens.isLoading}
              errMess={this.props.gardens.errMess}
            />
            <RenderItem
              item={this.props.bees.bees.filter((bee) => bee.featured)[0]}
              isLoading={this.props.bees.isLoading}
              errMess={this.props.bees.errMess}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 25,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
    shadowColor: "#D5E9D7",
    shadowOpacity: 10,
    elevation: 20,
    borderRadius: 10,
    backgroundColor: "#A8D8AD",
    marginTop: 6,
  },
  cardContent: {
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    shadowColor: "#D5E9D7",
    borderRadius: 10,
  },
});

export default connect(mapStateToProps)(Home);
