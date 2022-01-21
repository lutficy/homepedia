import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconClose} from '../../../assets';
import { Gap } from '../../atoms';

const AdditionalKeyword = () => {
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
      <TextInput placeholder="ex: Swimming Pool, Park, Train Station" />
    </View>
  );
};

export default AdditionalKeyword;

const styles = StyleSheet.create({});
