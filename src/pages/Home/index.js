import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  DummyApartment,
  DummyHouse,
  DummyKost,
  DummyMaskGroup,
  DummyNearby1,
  DummyNearby2,
  DummyOffice,
  DummyProperties1,
  DummyProperties2,
  IconChat,
  IconNotifikasi,
  ILLogoHome,
} from '../../assets';
import {Button, Categories, Gap, NearbyPlaces, Search} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.section}>
        <ILLogoHome />
        <View style={styles.sectionicon}>
          <View>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 8 / 2,
                backgroundColor: '#E6384E',
                position: 'absolute',
                right: 1,
                zIndex: 100
              }}>
            </View>
              <IconNotifikasi />
          </View>
          <Gap width={23} />
          <IconChat />
        </View>
      </View>
      <View style={styles.sectionsearch}>
        <Search />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.sectioncategories}>
          <Text style={{fontSize: 16, fontFamily: 'Nunito-Bold'}}>
            Categories
          </Text>
          <Gap height={15} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Categories image={DummyHouse} title="House" />
            <Categories image={DummyApartment} title="Apartment" />
            <Categories image={DummyOffice} title="Office" />
            <Categories image={DummyKost} title="Kost-an" />
          </View>
        </View>
        <View style={{paddingTop: 20}}>
          <View style={styles.nearby}>
            <Text style={styles.title}>Nearby Places</Text>
            <Text style={styles.subtitle}>See all</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{flexDirection: 'row'}}
            showsHorizontalScrollIndicator={false}>
            <NearbyPlaces
              image={DummyNearby1}
              place="Bekasi Kemala Regency"
              detailsplace="Bekasi Timur, Jawa Barat"
              bed="4"
              toilet="3"
              meter="120m2"
              price="1.5M"
              label=""
            />
            <NearbyPlaces
              image={DummyNearby2}
              place="Summarecon 73 Tower"
              detailsplace="Bekasi Timur, Jawa Barat"
              bed="1"
              toilet="1"
              meter="30m2"
              price="1.1M"
              label="Apart"
            />
          </ScrollView>
        </View>
        <View style={{paddingTop: 20}}>
          <View style={styles.nearby}>
            <Text style={styles.title}>New Properties</Text>
            <Text style={styles.subtitle}>See all</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{flexDirection: 'row'}}
            showsHorizontalScrollIndicator={false}>
            <NearbyPlaces
              image={DummyProperties1}
              place="Blue House with Two Floor"
              detailsplace="Kebayoran Baru, Jakarta Pusat, DKI J..."
              bed="4"
              toilet="3"
              meter="120m2"
              price="3M"
            />
            <NearbyPlaces
              image={DummyProperties2}
              place="Japanese Modern House"
              detailsplace="Kebayoran Baru, Jakarta Pusat, DKI J..."
              bed="3"
              toilet="3"
              meter="200m2"
              price="2.3M"
            />
          </ScrollView>
        </View>
        <View style={{paddingTop: 25}}>
          <ImageBackground
            source={DummyMaskGroup}
            style={styles.backgroundsell}>
            <Text style={styles.text1}>Renew Your Chapter for The Better </Text>
            <View>
              <View>
                <Text style={styles.text2}>
                  You can sell your property safely, comfortably and easily.
                </Text>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    position: 'absolute',
                    marginLeft: 230,
                  }}>
                  <Button title="Sell Property" />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 23,
    paddingTop: 23,
    backgroundColor: 'white',
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionicon: {
    flexDirection: 'row',
  },
  sectionsearch: {
    paddingTop: 15,
  },
  sectioncategories: {
    paddingTop: 21,
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
  backgroundsell: {
    height: 140,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: 'white',
    maxWidth: 176,
  },
  text2: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: 'white',
    maxWidth: 176,
    paddingTop: 5,
  },
});
