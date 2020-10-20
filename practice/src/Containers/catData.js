import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Button,
  FlatList,
} from 'react-native';
import {Header, Left, Body, Title, Item, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('screen');
const catData = props => {
  const data = props.route.params.itemData;

  return (
    <View>
      <Header>
        <Left>
          <Icon
            onPress={() => props.navigation.goBack()}
            size={20}
            name="chevron-back-outline"></Icon>
        </Left>
        <Body>
          <Title style={styles.headerStyle}>Shop Cart</Title>
        </Body>

        <Right>
          <Icon size={20} name="filter-outline"></Icon>
        </Right>
      </Header>

      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.cardStyle}>
            <Image
              source={require('../assets/shirt.jpeg')}
              resizeMode={'contain'}
            />
            <Text>Price : {item.id} Rs.</Text>
            <Icon
              style={{
                alignItems: 'flex-end',
                position: 'absolute',
                color: 'red',
              }}
              size={22}
              name="heart-outline"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: width / 2,
    height: height / 3,
  },
  headerStyle: {
    color: 'green',
    fontSize: 18,
    fontWeight: '500',
  },
  conatinerBlock: {
    flex: 1,
  },
});

export default catData;
