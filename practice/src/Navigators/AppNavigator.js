import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Appintro from '../SignUpFlow/AppIntro';
import Main from '../SignUpFlow/Main';
import HomeNavigator from '../Containers/HomeNavigator';
import CatData from '../Containers/catData'

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Appintro"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Appintro" component={Appintro} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        <Stack.Screen name="CatData" component={CatData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
