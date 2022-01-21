import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TabItem from '../TabItem';

const BottomTabNavigator = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 12,
        height: 66,
        borderRadius: 20,
        position: 'absolute',
        // marginBottom: 25,
        marginLeft: 45,
        // marginRight: 20,
        elevation: 100,
        borderRadius: 10,
        marginTop: 650,
        width: 300
        
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            isFocused={isFocused}
            label={label}
            onLongPress={onLongPress}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
