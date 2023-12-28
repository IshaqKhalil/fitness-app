import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import ScrollViewComp from '../components/ScrollViewComp';
import TopBar from '../components/TopBar';
import PrimaryButton from '../components/PrimaryButton';

const Timer = () => {
  return (
    <ScrollViewComp>
      <SafeAreaView>
        <TopBar text="Timer" backEnabled={false} />
        <View
          style={{
            marginTop: 30,
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 320,
            width: 320,
            borderRadius: 200,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#1E8FB2',
          }}>
          <Text
            style={{
              color: '#1E8FB2',
              fontSize: 30,
              fontFamily: 'Outfit-Regular',
            }}>
            00:00:00
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <PrimaryButton text="Start" onPress={() => {}} />
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <PrimaryButton text="Reset" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </ScrollViewComp>
  );
};

export default Timer;

const styles = StyleSheet.create({});
