import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Text, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Container, Header, Button} from 'native-base';
import FloatingLabelInput from '../common/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('screen');

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passWord: '',
    };
  }
  handleTextChange = newText => this.setState({email: newText});
  handlePassChange = newText => this.setState({passWord: newText});

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{top: hp('6.7%'),left:10}}>
          <Icon name="mail-outline" size={20} />
        </View>
        <View>
          <FloatingLabelInput
            label="Email"
            value={this.state.email}
            onChangeText={this.handleTextChange}
          />
        </View>
        <View>
          <View style={{top: hp('6.7%'),left:10}}>
            <Icon name="lock-closed-outline" size={20} />
          </View>
          <View>
            <FloatingLabelInput
              label="Password"
              value={this.state.passWord}
              onChangeText={this.handlePassChange}
            />
          </View>
        </View>
        <View style={{alignSelf: 'center', width: wp('70%'), top: 7}}>
          <Text style={styles.forgetCss}>Forgot Password?</Text>
        </View>

        <Button rounded info block style={styles.buttonStyle} onPress={()=>{this.props.onNext(this.state.email)}}>
          <Text style={styles.textStyle}>LOGIN</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainTab: {
    //  width:wp('40%'),
    alignSelf: 'center',
  },
  forgetCss: {
    fontSize: 16,
    textAlign: 'right',
    color: '#cccccc',
  },
  buttonStyle: {
    width: wp('80%'),
    top: 50,
    alignSelf: 'center',
    height: hp('7%'),
  },
  mainContainer: {
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  bottomView: {
    flex: 5,
  },
});
