import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details = ({text, subtext}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 100}}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.space}>:</Text>
      <Text style={styles.text}>{subtext}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: '#9B9B9B'
  },
  space: {
    paddingRight: 50,
    // position: 'absolute'
  },
});
