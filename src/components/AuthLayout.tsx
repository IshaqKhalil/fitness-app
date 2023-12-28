import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';
import ScrollViewComp from './ScrollViewComp';
import Logo from './Logo';

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <ScrollViewComp>
      <SafeAreaView style={styles.bg}>
        <View style={styles.view}>
          <Logo />
          {children}
        </View>
      </SafeAreaView>
    </ScrollViewComp>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  view: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
