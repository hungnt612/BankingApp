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

const Home = ({navigation}) => {
  const headerSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: COLORS.lightGray, ...FONTS.h3}}>Welcome</Text>
          <Text style={{color: COLORS.black, ...FONTS.h1}}>Peter R.</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('hihi')}>
          <Image
            source={images.profile}
            style={{width: 40, height: 40, borderRadius: 20}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const cardSection = () => {
    return (
      <View
        style={{
          width: '98%',
          height: 260,
          //   backgroundColor: 'red',
          alignSelf: 'flex-end',
          justifyContent: 'center',
        }}>
        <FlatList
          data={dummyData.cardData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: 340,
                  height: 220,
                  backgroundColor: item.color,
                  marginLeft: 14,
                  borderRadius: 45,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '90%',
                    height: 180,
                    // backgroundColor: 'green',
                    flexDirection: 'column',
                  }}>
                  <Text style={{color: COLORS.lightGray, ...FONTS.body4}}>
                    Personal balance
                  </Text>
                  <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
                    $ {item.balance}
                  </Text>
                  <View style={{flexDirection: 'row', marginVertical: 20}}>
                    <Text
                      style={{
                        color: COLORS.white,
                        fontSize: 10,
                        marginRight: 20,
                      }}>
                      {item.numberCard}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.white,
                        fontSize: 10,
                        marginRight: 20,
                      }}>
                      {item.numberCard}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.white,
                        fontSize: 10,
                        marginRight: 10,
                      }}>
                      {item.numberCard}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '68%'}}>
                      <Text style={{color: COLORS.lightGray, ...FONTS.body4}}>
                        This month's income
                      </Text>
                      <Text style={{color: COLORS.white, ...FONTS.h2}}>
                        {item.incomeInMonth}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 75,
                        height: 35,
                        backgroundColor: COLORS.lightGray,
                        alignSelf: 'flex-end',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: COLORS.white, ...FONTS.h3}}>
                        +{item.percentIcome}%
                      </Text>
                    </View>
                  </View>
                </View>
                {/* <Text style={{color: COLORS.white, fontSize: 10}}>
                  {item.numberCard}
                </Text> */}
              </View>
            );
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {headerSection()}
        {cardSection()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
