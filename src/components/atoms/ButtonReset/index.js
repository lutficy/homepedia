import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonReset = ({title, type, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} onPress={() => navigation.navigate('Houses')}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonReset;

const styles = StyleSheet.create({
  wrapper: {
    width: 93,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EB4C60',
    borderWidth: 0.5
  },
  title: {
    fontSize: 16,
    color: '#EB4C60'
  },
});
