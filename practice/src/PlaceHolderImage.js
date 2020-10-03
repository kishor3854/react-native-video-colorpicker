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
        alignItems: 'center',
        height: props.height,
        width: props.width,
        borderRadius: 600,
        borderColor: '#0B6FA0',
        borderWidth: 0.5,
      }}
    />
  );
};
