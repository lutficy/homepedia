import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBed, IconMeter, IconToilet} from '../../../assets';

const FurniturDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <View style={styles.wrappericon}>
          <IconBed width="13" height="13" />
        </View>
        <Text style={styles.title}>3 Beds</Text>
      </View>
      <Text style={{color: '#9B9B9B'}}>|</Text>
      <View style={styles.iconsection}>
        <View style={styles.wrappericon}>
          <IconToilet width="13" height="13" />
        </View>
        <Text style={styles.title}>3 Bath</Text>
      </View>
      <Text style={{color: '#9B9B9B'}}>|</Text>
      <View style={styles.iconsection}>
        <View style={styles.wrappericon}>
          <IconMeter width="13" height="13" />
        </View>
        <Text style={styles.title}>200 m2</Text>
      </View>
    </View>
  );
};

export default FurniturDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 0.05,
    
  },
  title: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    paddingLeft: 10,
  },
  wrappericon: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
