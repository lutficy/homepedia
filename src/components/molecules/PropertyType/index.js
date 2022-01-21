import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PropertyType = ({title, active, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.wrapper(active)}>
        <Text style={styles.title(active)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyType;

const styles = StyleSheet.create({
  wrapper: active => ({
    height: 45,
    backgroundColor: active ? '#FFD6DB' : 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 23,
    paddingVertical: 14,
    borderRadius: 10,
    marginRight: 8,
    borderColor: active ? '#EB4C60' : '#FFC6CD',
    borderWidth: 0.5,
    // alignItems: 'center',
    // justifyContent: 'center',
  }),
  title: active => ({
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    color: active ? '#EB4C60' : '#9B9B9B',
    height: 60,
    
  }),
});
