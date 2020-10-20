import React from 'react';
import {View, Dimensions, StyleSheet, Text,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button} from 'native-base';

const {width, height} = Dimensions.get('screen');

export default AppIntro = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3}}>
        <Swiper style={styles.wrapper} autoplay={true}>
          <View style={styles.slide1}>
          <Image
              source={require('../assets/women.jpeg')}
              style={{resizeMode: 'contain', width: width}}
            />
          </View>
          <View style={styles.slide1}>
          <Image
              source={require('../assets/men.jpeg')}
              style={{resizeMode: 'contain', width: width}}
            />
          </View>
          <View style={styles.slide1}>
          <Image
              source={require('../assets/kids.jpeg')}
              style={{resizeMode: 'contain', width: width}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 1}}>
        <View>
          <Text style={styles.heading}>
            Welcome to
            {<Text style={{fontWeight: '400'}}> Shop Cart</Text>}
          </Text>
        </View>

        <View style={styles.midContainer}>
          <Text style={styles.miniContainer}>
            Each online store has it own store and beg, but if you want to go
            shopping in multiple places at once, so you only have one beg.So get
            start for multiple beg.
          </Text>
        </View>
      </View>

      <Button info block style={styles.buttonDesign} onPress={() => props.navigation.navigate('Main')}>
        <Text style={{fontSize: 20}}>Get Started</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  buttonDesign: {
    width: width,
  },
  miniContainer: {
    letterSpacing: 0.2,
    lineHeight: 22,
    fontWeight: '300',
    fontSize: 15,
  },
  midContainer: {
    alignSelf: 'center',
    width: width / 1.2,
  },
  heading: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 80,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
