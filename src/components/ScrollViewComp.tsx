import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ScrollViewComp = ({children}: {children: React.ReactNode}) => {
  return <ScrollView contentContainerStyle={styles.scroll}>{children}</ScrollView>;
};

export default ScrollViewComp;

const styles = StyleSheet.create({
  scroll: {
    minHeight: '100%',
  },
});
