import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Divider = () => {
  return (
    <View style={styles.hrview}>
      <View style={styles.hrline} />
      <View style={styles.centertext}>
        <Text style={styles.text}>or</Text>
      </View>
      <View style={styles.hrline} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#000',
    marginVertical: 30,
  },
  hrview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
  },
  hrline: {
    flex: 1,
    height: 1,
    backgroundColor: '#eaeaea',
  },
  centertext: {marginHorizontal: 10},
});
