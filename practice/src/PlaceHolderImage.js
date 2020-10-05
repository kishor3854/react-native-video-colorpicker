import React from 'react';
import {Text, Image} from 'react-native';

export default PlaceHolderImage = props => {
  return (
    <Image
      source={props.source}
      resizeMode="center"
      style={{
        backgroundColor: '#EBF0FF',
        justifyContent: 'center',
        //alignItems: 'center',
        height: props.height,
        width: props.width,
        borderRadius:40,
        borderColor: '#0B6FA0',
        right:5,
        borderWidth: 0.5,
        position:'absolute',

      }}
    />
  );
};
