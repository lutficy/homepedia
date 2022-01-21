import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Explore,
  Favorite,
  FilteredSearch,
  Home,
  Houses,
  HouseSelected,
  Profile,
  Splash,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabNavigator {...props} />}
      sceneContainerStyle={{
        tabBarStyle: {},
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FilteredSearch"
        component={FilteredSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Houses"
        component={Houses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HouseSelected"
        component={HouseSelected}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
