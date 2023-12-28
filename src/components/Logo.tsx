import {StyleSheet, Image} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      resizeMode="contain"
      source={require('../assets/logo.png')}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: '70%',
  },
});
