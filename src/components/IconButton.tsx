import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const IconButton = ({text}: {text: string}) => {
  return (
    <TouchableOpacity activeOpacity={.8}  style={styles.view}>
      <Image source={require('../assets/google.png')} />
      <Text style={styles.buttontext}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  buttontext: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textTransform: 'capitalize',
  },
});
