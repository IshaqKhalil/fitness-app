import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface PrimaryButton {
  text: string;
  onPress: () => void;
}

const PrimaryButton = ({text, onPress}: PrimaryButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.buttontext}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#1E8FB2',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 8,
  },
  buttontext: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
  },
});
