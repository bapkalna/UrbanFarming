import React, { Component } from "react";
import Home from "./HomeComponent";
import AnimalBlog from "./AnimalBlogComponent";
import GardenBlog from "./GardenBlogComponent";
import BeeBlog from "./BeeBlogComponent";
import Contact from "./ContactComponent";
import Animal from "./AnimalComponent";
import Garden from "./GardenComponent";
import Bee from "./BeeComponent";
import Login from "./LoginComponent";
import Constants from "expo-constants";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import {
  fetchBlogs,
  fetchAnimals,
  fetchGardens,
  fetchBees,
} from "../redux/ActionCreators";

const mapDispatchToProps = {
  fetchBlogs,
  fetchAnimals,
  fetchGardens,
  fetchBees,
};

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#234A12",
      },
      headerTintColor: "#D5E9D7",
      headerTitleStyle: {
        color: "#D5E9D7",
      },
      headerLeft: (
        <Icon
          name="sign-in"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AnimalBlogNavigator = createStackNavigator(
  {
    AnimalBlog: {
      screen: AnimalBlog,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    Animal: { screen: Animal },
  },
  {
    initialRouteName: "AnimalBlog",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#234A12",
      },
      headerTintColor: "#D5E9D7",
      headerTitleStyle: {
        color: "#D5E9D7",
      },
    },
  }
);

const GardenBlogNavigator = createStackNavigator(
  {
    GardenBlog: {
      screen: GardenBlog,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    Garden: { screen: Garden},
  },
  {
    initialRouteName: "GardenBlog",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#234A12",
      },
      headerTintColor: "#D5E9D7",
      headerTitleStyle: {
        color: "#D5E9D7",
      },
    },
  }
);

const BeeBlogNavigator = createStackNavigator(
  {
    BeeBlog: {
      screen: BeeBlog,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    Bee: { screen: Bee},
  },
  {
    initialRouteName: "BeeBlog",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#234A12",
      },
      headerTintColor: "#D5E9D7",
      headerTitleStyle: {
        color: "#D5E9D7",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#234A12",
      },
      headerTintColor: "#D5E9D7",
      headerTitleStyle: {
        color: "#D5E9D7",
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#234A12",
      },
      headerTintColor: "#D5E9D7",
      headerTitleStyle: {
        color: "#D5E9D7",
      },
      headerLeft: (
        <Icon
          name="phone"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.jpg")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>City Farm</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    AnimalBlog: {
      screen: AnimalBlogNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="paw" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    GardenBlog: {
      screen: GardenBlogNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="tree" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    BeeBlog: {
      screen: BeeBlogNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="bug" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon name="phone" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Login: {
        screen: LoginNavigator,
        navigationOptions: {
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="sign-in"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        },
      },
  },
  {
    drawerBackgroundColor: "#234A12",
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: "#D5E9D7",
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
    this.props.fetchAnimals();
    this.props.fetchGardens();
    this.props.fetchBees();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#D5E9D7",
  },
  drawerHeader: {
    backgroundColor: "#89A98C",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#234A12",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#D5E9D7",
    fontSize: 24,
  },
});

export default connect(null, mapDispatchToProps)(Main);
