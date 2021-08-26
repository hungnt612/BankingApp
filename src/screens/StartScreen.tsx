/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

const StartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#6757E7'}}>
      <View
        style={{
          flex: 1,
          //   backgroundColor: 'red',
          alignItems: 'center',
          //   marginTop: '15%',
        }}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={images.loginBackground}
          style={{
            justifyContent: 'flex-end',
            width: 350,
            height: 350,
            marginVertical: 40,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            width: 360,
            height: 310,
            backgroundColor: COLORS.white,
            borderRadius: 50,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 18,
          }}>
          <View style={{marginVertical: 40}}>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.h1,
                textAlign: 'center',
              }}>
              Start to Discover
            </Text>
            <Text
              style={{color: COLORS.black, ...FONTS.h1, textAlign: 'center'}}>
              EasyMoney
            </Text>
            <View style={{marginTop: 16}}>
              <Text
                style={{
                  color: COLORS.lightGray,
                  ...FONTS.h4,
                  textAlign: 'center',
                }}>
                Get the know the fastest and easiest Banking
              </Text>
              <Text
                style={{
                  color: COLORS.lightGray,
                  ...FONTS.h4,
                  textAlign: 'center',
                }}>
                Service in the world - EasyMoney
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              //   backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 70,
                width: '20%',
                backgroundColor: COLORS.gray2,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.infinity4}
                style={{width: 36, height: 36, transform: [{rotate: '40deg'}]}}
              />
            </View>
            <View
              style={{
                width: '4%',
              }}
            />
            <View
              style={{
                height: 70,
                width: '20%',
                backgroundColor: COLORS.lightBlue,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.arrow}
                style={{
                  width: 35,
                  height: 35,
                  transform: [{rotate: '40deg'}],
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
