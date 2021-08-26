import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import {COLORS} from './src/constants';
import Home from './src/screens/Home';
// import Tabs from './src/navigation/tabs';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Recipe" component={Recipe} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
