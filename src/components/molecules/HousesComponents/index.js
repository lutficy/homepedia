import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  DummyNearby1,
  IconAccessTime,
  IconBed,
  IconFavoriteActive,
  IconFavoriteInactive,
  IconFeatured,
  IconLabelApart,
  IconLabelHouse,
  IconMeter,
  IconToilet,
} from '../../../assets';
import {Gap} from '../../atoms';

const HousesComponents = ({
  image,
  place,
  detailsplace,
  bed,
  toilet,
  meter,
  price,
  label,
  onPress,
}) => {
  const Label = () => {
    if (label === 'House') {
      return <IconLabelHouse />;
    }
    if (label === 'Apart') {
      return <IconLabelApart />;
    }
    return <IconLabelHouse />;
  };

  const [Favorite, setFavorite] = useState(true);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ImageBackground imageStyle={{borderRadius: 5}} source={image} style={styles.image}>
            <View
              style={{
                alignItems: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <IconFeatured />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setFavorite(!Favorite);
                }}
                style={{paddingRight: 5, paddingTop: 5}}>
                {Favorite ? <IconFavoriteInactive /> : <IconFavoriteActive />}
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft: 8, paddingBottom: 5}}>
              <Label />
            </View>
          </ImageBackground>
          <View style={{paddingHorizontal: 8}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.place}>{place}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 10, color: '#EB4C60'}}>IDR</Text>
                <Gap width={3} />
                <Text style={{fontSize: 14, color: '#EB4C60'}}>{price}</Text>
              </View>
            </View>
            <Text style={styles.placedetails}>{detailsplace}</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.wrappericon}>
                    <IconBed />
                  </View>
                  <Gap width={8} />
                  <View>
                    <Text>{bed}</Text>
                  </View>
                </View>
                <Gap width={10} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.wrappericon}>
                    <IconToilet />
                  </View>
                  <Gap width={8} />
                  <View>
                    <Text>{toilet}</Text>
                  </View>
                </View>
                <Gap width={10} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.wrappericon}>
                    <IconMeter />
                  </View>
                  <Gap width={8} />
                  <View>
                    <Text>{meter}</Text>
                  </View>
                </View>
                <Gap width={10} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <IconAccessTime />
                <Gap width={3} />
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Nunito-SemiBold',
                    color: '#C7C7C7',
                  }}>
                  2d
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HousesComponents;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  nearby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  title: {
    color: '#505050',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
  },
  subtitle: {
    color: '#EB4C60',
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
  },
  wrapper: {
    height: 195,
    width: 340,
    borderRadius: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingRight: 22
  },
  image: {
    height: 130,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingTop: 4,
    borderRadius: 10,
  },
  wrappericon: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  place: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Nunito-SemiBold',
    paddingTop: 6,
  },
  placedetails: {
    fontSize: 12,
    color: '#9B9B9B',
    fontFamily: 'Nunito-Regular',
  },
});
