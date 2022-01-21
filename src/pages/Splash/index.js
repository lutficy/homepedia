import React, { useEffect } from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILBackGround, ILLogoSplash} from '../../assets';

const Splash = ({navigation}) => {
  useEffect (()=> {
    setTimeout (() => {
      navigation.replace('MainApp')
    }, 3000)
  },[])

  return (
    <ImageBackground source={ILBackGround} style={styles.background}>
      <ILLogoSplash />
      <Text style={styles.tagline}>Find Results that Move You</Text>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagline: {
      fontSize: 24,
      color: 'white',
      fontFamily: 'Poppins-Regular',
      maxWidth: 237,
      textAlign: 'center',
      paddingTop: 15
  }
});
