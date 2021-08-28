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
import {FONTS, COLORS, SIZES, icons, images} from '../constants';
import dummyData from '../constants/dummyData';

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

  const friendsSection = () => {
    return (
      <View
        style={{
          width: '99%',
          height: 140,
          //   backgroundColor: 'red',
          alignSelf: 'flex-end',
          marginTop: -20,
          //   justifyContent: 'center',
        }}>
        <View
          style={{
            width: '100%',
            // backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 12,
          }}>
          <View
            style={{width: '50%', justifyContent: 'center', marginLeft: -10}}>
            <Text style={{marginLeft: 16, ...FONTS.h2}}>Friends</Text>
          </View>
          <View
            style={{
              width: '42%',
              //   backgroundColor: 'yellow',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 16, ...FONTS.h4, color: COLORS.gray}}>
              see all
            </Text>
          </View>
        </View>
        <FlatList
          style={{marginLeft: 16}}
          data={dummyData.friendList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: 90,
                  width: 75,
                  marginRight: 10,
                  //   backgroundColor: 'red',
                  alignItems: 'center',
                  flexDirection: 'column-reverse',
                }}>
                <Text style={{marginTop: 12}}>{item.name}</Text>
                <View
                  style={{
                    height: 60,
                    width: 55,
                    backgroundColor: item.color,
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    borderRadius: 25,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 40,
                      height: 50,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  {/* <Text>{item.name}</Text> */}
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  const transationsSection = () => {
    return (
      <View
        style={{
          marginHorizontal: 26,
          marginTop: 10,
          height: 218,
          // backgroundColor: 'red',
          flexDirection: 'column',
          // marginVertical,
        }}>
        <View style={{width: '100%'}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            Last transactions
          </Text>
        </View>
        <FlatList
          // style={{marginLeft: 16}}
          data={dummyData.transactionsList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 80,
                  backgroundColor: COLORS.white,
                  marginTop: 20,
                  borderRadius: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#EFEFFF',
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    marginLeft: 16,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 40, height: 40}}></Image>
                </View>
                <View
                  style={{
                    width: '50%',
                    // backgroundColor: 'red',
                    height: 50,
                    marginLeft: 16,
                  }}>
                  <Text
                    style={{color: COLORS.black, ...FONTS.h3, marginTop: -5}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{color: COLORS.gray, ...FONTS.body4, marginTop: 2}}>
                    {item.time}
                  </Text>
                </View>
                <View
                  style={{
                    // backgroundColor: 'red',
                    width: '100%',
                    marginLeft: -24,
                  }}>
                  <Text style={{color: '#697CE8', ...FONTS.h3, fontSize: 18}}>
                    {item.type === 'income' ? <Text>+</Text> : <Text>-</Text>}
                    {item.value}€
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6FAFF'}}>
      <View style={{backgroundColor: '#F6FAFF'}}>
        {headerSection()}
        {cardSection()}
        {friendsSection()}
        {transationsSection()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
