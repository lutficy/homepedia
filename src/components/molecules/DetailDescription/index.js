import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailDescription = () => {
  return (
    <View>
      <Text style={styles.title}>Details</Text>
      <View style={{paddingTop: 10}}>
        <Text style={styles.text}>
          Full brick 2 story house, fully furnished, and close to public
          transportation.
        </Text>
        <Text style={styles.text}>
          Arteri St., Pondok Indah, Jakarta Selatan
        </Text>
      </View>
    </View>
  );
};

export default DetailDescription;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: 'Nunito-Bold',
  },
  text: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    color: '#9B9B9B',
  },
});
