/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {COLORS} from '../constants';

type TabIconProperties = {
  focused: any;
  icon: string;
};

const TabIcon: React.FC<TabIconProperties> = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 50,
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.blue2 : COLORS.lightGray,
        }}></Image>
      {focused && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            // backgroundColor: COLORS.darkGreen,
          }}></View>
      )}
    </View>
  );
};

export default TabIcon;
