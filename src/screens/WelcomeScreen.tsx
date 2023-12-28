import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Logo from '../components/Logo';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.png')}
      resizeMode="cover"
      blurRadius={5}
      style={styles.image}>
      <View style={styles.view}>
        <Logo />
        <Text style={styles.text}>Start your Daily Workout now!</Text>
        <View style={styles.button}>
          <PrimaryButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            text="Get Started"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Outfit-Regular',
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 50,
    letterSpacing: 0.46,
    textTransform: 'capitalize',
    maxWidth: '70%',
    marginTop: -80,
  },
  button: {
    marginBottom: 20,
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
