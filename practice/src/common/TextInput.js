import React,{Component} from 'react';
import {View,TextInput,Text,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('screen')
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default class FloatingLabelInput extends Component {
    state = {
      isFocused: false,
    };
  
    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });
  
    render() {
      const { label, ...props } = this.props;
      const { isFocused } = this.state;
      const labelStyle = {
       // position: 'absolute',
        left: 0,
        top: !isFocused ? 18 : 0,
        fontSize: !isFocused ? 18 : 14,
        color: !isFocused ? '#aaa' : '#000',
        marginHorizontal:wp('15%'),
        //backgroundColor:'green'
      };
      return (
        <View style={{ paddingTop: 18 }}>
          <Text style={labelStyle}>
            {label}
          </Text>
          <TextInput
            {...props}
            style={{height: hp('5%'), alignSelf:'center',width:wp('70%'),fontSize: 20, color: '#33b4ff', borderBottomWidth: 1, borderBottomColor: '#7aceff' }}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </View>
      );
    }
  }