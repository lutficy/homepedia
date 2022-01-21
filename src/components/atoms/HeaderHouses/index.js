import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconBackArrow, IconFilter} from '../../../assets';

const HeaderHouses = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <IconBackArrow />
        <View style={styles.input}>
          <TextInput placeholder="Jakarta Selatan" />
        </View>
      </View>
      <IconFilter />
    </View>
  );
};

export default HeaderHouses;

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#F1F1F1',
    borderRadius: 10,
    paddingRight: 4
  },
  section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 19
  },
  input: {
    paddingLeft: 14,
  },
});
