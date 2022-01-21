import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonFilter = ({title, type, onPress}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} onPress={() => navigation.navigate('Houses')}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFilter;

const styles = StyleSheet.create({
  wrapper: {
    width: 228,
    height: 55,
    backgroundColor: '#EB4C60',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});
