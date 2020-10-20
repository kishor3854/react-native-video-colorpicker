import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Container, Header, Left, Right} from 'native-base';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('screen');

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: true,
    };
  }

  onNext = () => {
    this.props.navigation.navigate('HomeNavigator');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Header hasTabs noShadow style={{backgroundColor: 'white'}}>
            <Left>
              <Image
                source={require('../assets/crown_icon.png')}
                resizeMode={'center'}
                style={styles.logoCss}
              />
            </Left>

            <Right>
              <Text style={styles.skipCss}>Skip</Text>
            </Right>
          </Header>
        </View>

        <View style={styles.bottomView}>
          <Swiper
            showsPagination={false}
            style={styles.wrapper}
            autoplay={false}
            dot={
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }>
            <View style={styles.mainContainer}>
              <SignIn onNext={this.onNext} />
            </View>

            <View style={styles.mainContainer}>
              <SignUp  onNext={this.onNext}/>
            </View>
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainTab: {
    //  width:wp('40%'),
    alignSelf: 'center',
  },
  signInTab: {},
  signUpTab: {},
  skipCss: {
    fontSize: 17,
  },
  logoCss: {
    width: wp('30%'),
    height: hp('18%'),
  },
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  bottomView: {
    flex: 5,
  },
});
