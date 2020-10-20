import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {Header, Left, Body, Title, Item} from 'native-base';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import {videosActions} from '../redux/video/reducer';
import {bindActionCreators, Dispatch} from 'redux';
import {Row, Col, Grid} from 'react-native-easy-grid';

const {width, height} = Dimensions.get('screen');
const uri = require('../assets/add_photo.png');

const DashBoard = props => {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    console.log('props->', props);

    if (props.data.length === 0) {
      props.getVideos();
    }
    // props.getVideos();
  });

  return props.isLoading ? (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 0,
        alignItems: 'center',
        backgroundColor: '#EFF7F9',
      }}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={styles.conatinerBlock}>
      <Header>
        <Body>
          <Title style={styles.headerStyle}>Shop Cart</Title>
        </Body>
      </Header>

      <View style={[styles.conatinerBlock, {backgroundColor: 'white'}]}>
        <Swiper>
          <View>
            <Image
              source={require('../assets/men.jpeg')}
              style={{resizeMode: 'contain', width: width}}
            />
          </View>
          <View>
            <Image
              source={require('../assets/women.jpeg')}
              style={{resizeMode: 'contain', width: width}}
            />
          </View>
          <View>
            <Image
              source={require('../assets/kids.jpeg')}
              style={{resizeMode: 'contain', width: width}}
            />
          </View>
        </Swiper>
      </View>

      <View style={[styles.conatinerBlock]}>
        <Grid>
          <TouchableWithoutFeedback
            onPress={() =>
              props.navigation.navigate('CatData', {
                itemData: props.data,
              })
            }>
            <Col>
              <ImageBackground
                source={require('../assets/girl.jpeg')}
                style={{width: width / 2, height: height / 2}}
                //resizeMode={'center'}
              >
                <View
                  style={{
                    alignSelf: 'center',
                    backgroundColor: 'black',
                    borderColor: 'red',
                    borderWidth: 2,
                    position: 'absolute',
                    top: height / 3,
                  }}>
                  <Text
                    style={{fontWeight: '700', color: 'white', fontSize: 18}}>
                    Kids wear
                  </Text>
                </View>
              </ImageBackground>
            </Col>
          </TouchableWithoutFeedback>

          <Col>
            <TouchableWithoutFeedback
              onPress={() =>
                props.navigation.navigate('CatData', {
                  itemData: props.data,
                })
              }>
              <Row>
                <ImageBackground
                  source={require('../assets/women.jpeg')}
                  style={{width: width / 2, height: height / 3}}
                  //resizeMode={'center'}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      backgroundColor: 'black',
                      borderColor: 'yellow',
                      borderWidth: 2,
                      position: 'absolute',
                      top: height / 7,
                    }}>
                    <Text
                      style={{fontWeight: '700', color: 'white', fontSize: 18}}>
                      Women's wear
                    </Text>
                  </View>
                </ImageBackground>
              </Row>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() =>
                props.navigation.navigate('CatData', {
                  itemData: props.data,
                })
              }>
              <Row>
                <ImageBackground
                  source={require('../assets/shirt.jpeg')}
                  style={{width: width / 2, height: height / 3}}
                  resizeMode={'cover'}>
                  <View
                    style={{
                      alignSelf: 'center',
                      backgroundColor: 'black',
                      borderColor: 'green',
                      borderWidth: 2,
                      position: 'absolute',
                      top: height / 7.5,
                    }}>
                    <Text
                      style={{fontWeight: '700', color: 'white', fontSize: 18}}>
                      Men's wear
                    </Text>
                  </View>
                </ImageBackground>
              </Row>
            </TouchableWithoutFeedback>
          </Col>
        </Grid>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    color: 'green',
    fontSize: 18,
    fontWeight: '500',
  },
  conatinerBlock: {
    flex: 1,
  },
});

const mapStateToProps = ({videos}) => {
  return {...videos};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...videosActions.Creators,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
