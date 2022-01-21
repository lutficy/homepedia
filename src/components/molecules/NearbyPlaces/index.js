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
  IconBed,
  IconFavoriteActive,
  IconFavoriteInactive,
  IconLabelApart,
  IconLabelHouse,
  IconMeter,
  IconToilet,
} from '../../../assets';
import {Gap} from '../../atoms';

const NearbyPlaces = ({
  image,
  place,
  detailsplace,
  bed,
  toilet,
  meter,
  price,
  label,
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
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ImageBackground imageStyle={{borderRadius: 5}} source={image} style={styles.image}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                setFavorite(!Favorite);
              }}>
              {Favorite ? <IconFavoriteInactive /> : <IconFavoriteActive />}
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: 8, paddingBottom: 5}}>
            <Label />
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 8}}>
          <Text style={styles.place}>{place}</Text>
          <Text style={styles.placedetails}>{detailsplace}</Text>
          <View
            style={{flexDirection: 'row', paddingTop: 5, alignItems: 'center'}}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
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
            <Text style={{fontSize: 10, color: '#EB4C60'}}>IDR</Text>
            <Gap width={3} />
            <Text style={{fontSize: 14, color: '#EB4C60'}}>{price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NearbyPlaces;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
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
    width: 225,
    borderRadius: 10,
  },
  image: {
    height: 130,
    width: 225,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingRight: 4,
    paddingTop: 4,
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
