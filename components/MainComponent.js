import React, { Component } from 'react';
import Home from './HomeComponent';
import Blog from './BlogComponent';
import AnimalBlog from './AnimalsBlogComponent';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

const BlogNavigator = createStackNavigator(
    {
        Blog: { 
            screen: Blog,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        AnimalBlog: { screen: AnimalBlog }
    },
    {
        initialRouteName: 'Blog',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#234A12'
            },
            headerTintColor: '#D5E9D7',
            headerTitleStyle: {
                color: '#D5E9D7'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#234A12'
            },
            headerTintColor: '#D5E9D7',
            headerTitleStyle: {
                color: '#D5E9D7'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);



const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Blog: { screen: BlogNavigator },
       
    },
    {
        drawerBackgroundColor: '#234A12'
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#D5E9D7',
        fontSize: 24
    }
});

export default Main;
