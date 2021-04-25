import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Restaurant } from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = {'Home'}
      >
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="Restaurant" component={ Restaurant }/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;