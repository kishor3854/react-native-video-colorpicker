import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import VideoScreen from './VideoScreen';
import PlaceHolderImage from './PlaceHolderImage';

export default video = () => {
  const [imageSource, setImageSource] = useState(null);

  const selectPhoto = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      takePhotoButtonTitle: 'Camera',
      chooseFromLibraryButtonTitle: 'Gallery',
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        setImageSource(source);
      }
    });
  };

  return (
    <View style={{backgroundColor: '#f5f5f5', height: hp('100%')}}>
      <View style={{backgroundColor: '#dbdbdb', height: hp('15%')}}>
        <Row style={{top: 80}}>
          <Row>
            <Col>
              <Text style={{textAlign: 'left', fontSize: wp('3.50%')}}>
                Today
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: wp('6%'),
                  fontWeight: 'bold',
                }}>
                My Feed
              </Text>
            </Col>

            <Col>
              <View style={styles.pickerCss}>
                <TouchableOpacity onPress={selectPhoto}>
                  <PlaceHolderImage
                    source={imageSource}
                    height={hp('6%')}
                    width={wp('13%')}
                  />
                </TouchableOpacity>
              </View>
            </Col>
          </Row>
        </Row>
      </View>

      <VideoScreen />
    </View>
  );
};

var styles = StyleSheet.create({
  pickerCss: {
    bottom: 2,
    right: 5,
    backgroundColor: 'white',
    width: wp('13%'),
    height: hp('6%'),
    alignSelf: 'flex-end',
    borderRadius: 400,
  },
});
