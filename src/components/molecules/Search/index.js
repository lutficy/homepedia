import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconFilter, IconSearch} from '../../../assets';
import {Gap} from '../../atoms';

const Search = ({onPress}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.wrapper}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}}>
        <IconSearch />
        <Gap width={15} />
        <TextInput placeholder="Search house, apartment.." />
      </View>
      <View style={{paddingRight: 5}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} onPress={() => navigation.navigate('FilteredSearch')}>
          <IconFilter  />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});
