import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './DashBoard';
import Icon from 'react-native-vector-icons/Ionicons';

function HotOffer() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hot Offer!</Text>
    </View>
  );
}

function MyCart() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MyCart!</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MyCart!</Text>
    </View>
  );
}

function MyProfile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My Profile!</Text>
    </View>
  );

}

const Tab = createBottomTabNavigator();

export default HomeNavigator=() =>{
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? 25 : 20;
            color = focused ? 'red' : 'gray';
          } else if (route.name === 'Hot Offer') {
            iconName = focused ? 'flame' : 'flame-outline';
            size = focused ? 25 : 20;
            color = focused ? 'orange' : 'gray';
          } else if (route.name === 'My Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
            size = focused ? 25 : 20;
            color = focused ? 'green' : 'gray';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
            size = focused ? 25 : 20;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? 25 : 20;
            color = focused ? 'black' : 'gray';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Hot Offer" component={HotOffer} />
      <Tab.Screen name="My Cart" component={MyCart} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={MyProfile} />
    </Tab.Navigator>
  );
}
