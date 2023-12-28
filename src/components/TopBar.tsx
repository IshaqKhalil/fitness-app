import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface TopBar {
  backEnabled: boolean;
  text: string;
}

const TopBar = ({backEnabled, text}: TopBar) => {
  return (
    <View style={styles.view}>
      <View style={styles.arrow}>
        {backEnabled && (
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="arrow-back-outline" size={25} color="#fff" />
          </TouchableOpacity>
        )}
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <Icon name="search" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#1E8FB2',
    height: 65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
