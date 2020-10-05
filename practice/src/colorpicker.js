import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {colorActions} from './redux/color/reducer';
import {bindActionCreators, Dispatch} from 'redux';

let cId = 0;
let touchId = 0;
let newIndex = {};

const colorpicker = props => {
  const [clr, setClr] = useState('rgb(223,235,111)');

  useEffect(() => {
    if (props.data.length === 0) {
      props.getColor();
    }
    // props.data.map(n => {
    //   n['isSelect'] = false;
    // });
   
  });

  const colorChange = (sideColor, index,childIndex) => {
    cId = index;
   
    
    if(!props.data[index-1].values[childIndex].isSelect){
      for(var i=0;i<props.data.length;i++){
        let item = props.data[i]
        //console.log("array1",item);
        
        for(var j=0;j<item.values.length;j++){
          let item2 = item.values[j]
         // console.log("array2",item2);
          item2.isSelect = false
        }
      }
    }
  

    props.data[index-1].values[childIndex].isSelect = true
   
    console.log("array Index","===",props.data);
    setClr(sideColor);
  };

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
    <View style={styles.mainContainer}>
      <View style={{top: hp('8%')}}>
        <Text
          style={{
            textAlign: 'left',
            left: 15,
            fontWeight: 'bold',
            fontSize: 25,
            color: 'rgb(45,91,142)',
          }}>
          pH Scale
        </Text>
      </View>

      <View style={{top: 100}}>
        <FlatList
          data={props.data}
          renderItem={({item, mainIndex}) => (
            <View style={styles.colorView}>
              <Grid>
                <Col size={10} style={{backgroundColor: 'white'}}>
                  <View style={styles.leftView}>
                    <Row />
                    <Row>
                      <View
                        style={{
                          height: hp('3%'),
                          width: '100%',
                          backgroundColor: cId === item.id ? clr : '',
                          flexDirection: 'column',
                        }}
                      />
                    </Row>
                  </View>
                </Col>

                <Col size={90}>
                  <Row style={{justifyContent: 'space-between'}}>
                    <Text
                      style={{
                        textAlign: 'left',
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 17,
                        marginLeft: wp('4.5%'),
                      }}>{`${item.name}(${item.unit})`}</Text>
                    <TextInput
                      keyboardType="phone-pad"
                      returnKeyType="next"
                      style={{
                        right: 10,
                        alignSelf: 'center',
                        borderRadius: 5,
                        borderColor: 'gray',
                        borderWidth: 0.7,
                        width: wp('20%'),
                        height: hp('5%'),
                      }}
                    />
                  </Row>

                  <Row>
                    {item.values.map((keyItem, childIndex) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            colorChange(keyItem.color, item.id,childIndex)
                          }>
                          <View
                            style={[
                              styles.smallBox,
                              {backgroundColor: keyItem.color,borderColor: keyItem.isSelect ? 'red' : 'transparent'},
                            ]}
                          />

                          <Text
                            style={{
                              top: 3,
                              alignSelf: 'center',
                              marginLeft: wp('4.5%'),
                            }}>
                            {keyItem.value}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </Row>
                </Col>
              </Grid>
            </View>
          )}
          keyExtractor={(item, mainIndex) => item.id.toString()}
         
        />
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: hp('100%'),
  },
  colorView: {
    backgroundColor: 'white',
    height: hp('18%'),
    width: wp('100%'),
    justifyContent: 'center',
  },
  leftView: {
    borderRadius: 0,
    borderWidth: 0.7,
    borderBottomColor: cId === 6 ? 'black' : 'white',
    // borderColor: 'gray',
    borderTopColor: cId === 1 ? 'black' : 'white',
    width: wp('8%'),
    height: hp('18%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    //flexDirection:'column'
  },
  smallBox: {
    borderRadius: 4,
    width: wp('13%'),
    height: hp('3%'),
    alignSelf: 'flex-start',
    marginLeft: wp('4.5%'),
    //    marginRight: 4,
    //backgroundColor: 'red',
    //borderColor: 'red',
    borderWidth: 2,
  },
});

const mapStateToProps = ({colors}) => {
  return {...colors};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...colorActions.Creators,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(colorpicker);
