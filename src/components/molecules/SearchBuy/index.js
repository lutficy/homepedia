import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconClose} from '../../../assets';
import { Gap } from '../../atoms';

const SearchBuy = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 10
      }}>
      <TextInput placeholder="Enter area, city, or property name" />
      <IconClose />
    </View>
  );
};

export default SearchBuy;

const styles = StyleSheet.create({});
