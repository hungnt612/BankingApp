import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import {COLORS} from './src/constants';
// import Tabs from './src/navigation/tabs';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
