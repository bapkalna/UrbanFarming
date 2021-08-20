import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";
import * as Animatable from "react-native-animatable";

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    animals: state.animals,
    gardens: state.gardens
  };
};

class Blog extends Component {
  static navigationOptions = {
    title: "Blogs",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderBlogItem = ({ item }) => {
      return (
        <Animatable.View animation="fadeInDown" duration={3000}>
          <Tile
            titleStyle={{ fontSize: 44, height: 50 }}
            captionStyle={{ fontSize: 24 }}
            title={item.name}
            caption={item.description}
            featured
            onPress={() => navigate("AnimalBlog", { animalId: item.id })}
            imageSrc={{ uri: baseUrl + item.image }}
            height={240}
          />
        </Animatable.View>
      );
    };

    if (this.props.blogs.isLoading) {
      return <Loading />;
    }
    if (this.props.blogs.errMess) {
      return (
        <View>
          <Text>{this.props.blogs.errMess}</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={this.props.blogs.blogs}
        renderItem={renderBlogItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ backgroundColor: "#D5E9D7" }}
      />
    );
  }
}

export default connect(mapStateToProps)(Blog);
