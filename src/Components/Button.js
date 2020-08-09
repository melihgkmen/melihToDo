import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={{
      backgroundColor: '#ff5c5c',
      width: '80%',
      height: '15%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    }}>
    <Text
      style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export {Button};
