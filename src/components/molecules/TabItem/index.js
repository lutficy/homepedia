import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconCompassActive,
  IconCompassinActive,
  IconFavoriteeActive,
  IconFavoriteeInactive,
  IconHomeActive,
  IconHomeInactive,
  IconProfileActive,
  IconProfileInactive,
} from '../../../assets';

const TabItem = ({label, onLongPress, onPress, isFocused, style}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHomeInactive />;
    }
    if (label === 'Explore') {
      return isFocused ? <IconCompassActive /> : <IconCompassinActive />;
    }
    if (label === 'Favorite') {
      return isFocused ? <IconFavoriteeActive /> : <IconFavoriteeInactive />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfileInactive />;
    }
    return <IconHomeActive />;
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      onLongPress={onLongPress}
      style={
        isFocused ? (style = styles.containerfocus) : (style = styles.container)
      }>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
  },
  containerfocus: {
    alignItems: 'center',
    backgroundColor: '#FFE2E6',
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#EB4C60',
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    marginLeft: 17,
  },
});
