import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {
  belliconactive,
  belliconinactive,
  callicon,
  homeiconactive,
  homeiconinactive,
  personiconactive,
  personiconinactive,
  searchiconactive,
  searchiconinactive,
} from '../assets/icons/index';

const Tabs = createBottomTabNavigator();

function Search() {
  return null;
}

function Call() {
  return null;
}

function Notification() {
  return null;
}

function Account() {
  return null;
}

const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: {height: 100},
          labelStyle: {fontSize: 14},
          tabStyle: {marginBottom: 5},
          activeTintColor: '#220375',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={Home}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.image} source={homeiconactive} />
              ) : (
                <Image style={styles.image} source={homeiconinactive} />
              ),
          }}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.image} source={searchiconactive} />
              ) : (
                <Image style={styles.image} source={searchiconinactive} />
              ),
          }}
        />
        <Tabs.Screen
          name="Call"
          component={Call}
          options={{
            tabBarIcon: ({}) => (
              <Image style={styles.callimage} source={callicon} />
            ),
          }}
        />
        <Tabs.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.image} source={belliconactive} />
              ) : (
                <Image style={styles.image} source={belliconinactive} />
              ),
          }}
        />
        <Tabs.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image style={styles.image} source={personiconactive} />
              ) : (
                <Image style={styles.image} source={personiconinactive} />
              ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  callimage: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: -20,
  },
});

export default Routes;
