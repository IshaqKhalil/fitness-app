import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import TopBar from '../components/TopBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FitIcon from 'react-native-vector-icons/FontAwesome5';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeCard from '../components/HomeCards';
import ScrollViewComp from '../components/ScrollViewComp';
import Timer from './Timer';

const Tab = createBottomTabNavigator();

function HomeNested() {
  return (
    <ScrollViewComp>
      <SafeAreaView>
        <TopBar text="Home" backEnabled={false} />
        <HomeCard
          imageName="beginner"
          heading="Beginner"
          subtext="Recommended for starters"
          tagText="Beginner"
        />
        <HomeCard
          imageName="intermediate"
          heading="Intermediate"
          subtext="Recommended after completing beginner"
          tagText="Intermediate"
        />
        <HomeCard
          imageName="advance"
          heading="Advance"
          subtext="Recommended after completing intermediate"
          tagText="Advance"
        />
        <HomeCard
          imageName="master"
          heading="Master Level"
          subtext="Recommended after completing all trainings"
          tagText="Master"
        />
      </SafeAreaView>
    </ScrollViewComp>
  );
}

const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#fff',
        ...styles.shadow,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          position: 'absolute',
          bottom: 20,
          left: 10,
          right: 10,
          borderRadius: 15,
          ...styles.shadow,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeNested"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name="home"
                  size={25}
                  color={focused ? '#1E8FB2' : '#000'}
                />
                <Text style={{color: `${focused ? '#1E8FB2' : '#000'}`}}>
                  Home
                </Text>
              </View>
            );
          },
        }}
        component={HomeNested}
      />
      <Tab.Screen
        name="Timer"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name="timer"
                  size={25}
                  color={focused ? '#1E8FB2' : '#000'}
                />
                <Text style={{color: `${focused ? '#1E8FB2' : '#000'}`}}>
                  Timer
                </Text>
              </View>
            );
          },
        }}
        component={Timer}
      />
      <Tab.Screen
        name="Program"
        options={{
          tabBarLabel: 'Program',
          tabBarIcon: ({focused}) => (
            <FitIcon
              name="dumbbell"
              size={20}
              color={focused ? '#1E8FB2' : '#000'}
            />
          ),
          tabBarButton: (props: any) => <CustomTabBarButton {...props} />,
        }}
        component={HomeNested}
      />
      <Tab.Screen
        name="Report"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name="calendar-number-sharp"
                  size={25}
                  color={focused ? '#1E8FB2' : '#000'}
                />
                <Text style={{color: `${focused ? '#1E8FB2' : '#000'}`}}>
                  Reports
                </Text>
              </View>
            );
          },
        }}
        component={HomeNested}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ProfileIcon
                  name="account"
                  size={25}
                  color={focused ? '#1E8FB2' : '#000'}
                />
                <Text style={{color: `${focused ? '#1E8FB2' : '#000'}`}}>
                  Profile
                </Text>
              </View>
            );
          },
        }}
        component={HomeNested}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#1E8FB2',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
