import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface HomeCard {
  imageName: string;
  heading: string;
  subtext: string;
  tagText: string;
}

const HomeCard = ({imageName, heading, subtext, tagText}: HomeCard) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ImageBackground
        source={
          imageName == 'beginner'
            ? require(`../assets/beginner.png`)
            : imageName == 'intermediate'
            ? require(`../assets/intermediate.png`)
            : imageName == 'advance'
            ? require(`../assets/advance.png`)
            : imageName == 'master'
            ? require(`../assets/master.png`)
            : require(`../assets/beginner.png`)
        }
        resizeMode="cover"
        style={{
          height: 150,
          padding: 20,
          marginHorizontal: 10,
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 6,
        }}
        imageStyle={{borderRadius: 15}}>
        <View style={styles.overlay} />
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 28,
            fontWeight: '700',
            color: '#fff',
          }}>
          {heading}
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            fontWeight: '600',
            color: '#fff',
          }}>
          {subtext}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#1E8FB2',
            }}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 14,
                fontWeight: '600',
                color: '#1E8FB2',
              }}>
              {tagText}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: '#1E8FB2',
            }}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 14,
                fontWeight: '600',
                color: '#1E8FB2',
              }}>
              Completed: 1/3
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
  },
});
