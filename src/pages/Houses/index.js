import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DummyHouses1,
  DummyHouses2,
  DummyHouses3,
  DummyHouses4,
  DummyHouses5,
  DummyHouses6,
  IconDownWard,
  IconSort,
} from '../../assets';
import {HeaderHouses, HousesComponents} from '../../components';

const Houses = ({navigation}) => {
  return (
    <View>
      <ScrollView style={styles.page}>
        <View style={styles.headersection}>
          <HeaderHouses />
        </View>
        <View style={styles.container}>
          <View>
            <View style={styles.sortsection}>
              <Text style={styles.properties}>100+ Properties Available</Text>
              <View style={styles.wrappersort}>
                <IconSort />
              </View>
            </View>
            <Text style={styles.filtered}>
              Filtered Search: House, 3 Bed, 2 Bath, Any S...
            </Text>
          </View>
          <View style={styles.housescontainer}>
            <HousesComponents
              image={DummyHouses1}
              place="Emerald Regency"
              detailsplace="Pondok Indah, Jakarta Selatan"
              bed="3"
              toilet="3"
              meter="120m2"
              price="IDR 1.5M"
            />
            <HousesComponents
              image={DummyHouses2}
              place="Puncak Indah Residence"
              detailsplace="Pondok Indah, Jakarta Selatan"
              bed="4"
              toilet="3"
              meter="200m2"
              price="IDR 1.8M"
              onPress={() => navigation.navigate('HouseSelected')}
            />
            <HousesComponents
              image={DummyHouses3}
              place="Amanda Townhouse"
              detailsplace="Pondok Indah, Jakarta Selatan"
              bed="2"
              toilet="1"
              meter="60m2"
              price="IDR 574Jt"
            />
            <HousesComponents
              image={DummyHouses4}
              place="Puri Indah Residence Blok A"
              detailsplace="Pondok Indah, Jakarta Selatan"
              bed="2"
              toilet="1"
              meter="70m2"
              price="IDR 390Jt"
            />
            <HousesComponents
              image={DummyHouses5}
              place="Cluster Pondok Indah"
              detailsplace="Pondok Indah, Jakarta Selatan"
              bed="2"
              toilet="1"
              meter="160m2"
              price="IDR 866Jt"
            />
            <HousesComponents
              image={DummyHouses6}
              place="Nirvana Land Blok C"
              detailsplace="Pondok Indah, Jakarta Selatan"
              bed="4"
              toilet="3"
              meter="55m2"
              price="IDR 210Jt"
            />
          </View>
        </View>
      </ScrollView>
        <View
          style={{
            height: 42,
            width: 124,
            backgroundColor: 'white',
            borderRadius: 40,
            borderWidth: 1,
            borderColor: '#FFE2E6',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            marginLeft: 130, marginTop: 670
          }}>
          <Text>Show More</Text>
          <IconDownWard />
        </View>
    </View>
  );
};

export default Houses;

const styles = StyleSheet.create({
  page: {},
  headersection: {
    paddingHorizontal: 22,
    paddingTop: 20,
    height: 90,
    backgroundColor: 'white',
  },
  container: {
    paddingLeft: 22,
    paddingRight: 26,
    paddingTop: 16,
    backgroundColor: 'white',
    elevation: 5,
    paddingBottom: 60
  },
  housescontainer: {
    paddingTop: 20,
    paddingRight: -15,
    marginRight: 22
  },
  wrappersort: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortsection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filtered: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: '#9B9B9B',
  },
  properties: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#505050',
  },
});
