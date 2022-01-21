import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  DummyHouseSelected,
  IconAccessTime,
  IconBackArrow,
  IconFavActive,
  IconFavInactive,
  IconFavoriteInactive,
  IconLabelHouse,
  IconLocation,
  IconWrapperBack,
  DummyMaps,
  IconBackRed,
  DummyAgent,
  IconStar,
  DummyProperties1,
  DummyProperties2,
  IconContact,
} from '../../assets';
import {
  Button,
  DetailDescription,
  Details,
  FurniturDetails,
  Gap,
  NearbyPlaces,
} from '../../components';

const HouseSelected = () => {
  const [Favorite, setFavorite] = useState(true);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.page}>
        <ImageBackground source={DummyHouseSelected} style={styles.image}>
          <View style={styles.iconsection}>
            <IconWrapperBack />
            <TouchableOpacity onPress={() => setFavorite(!Favorite)}>
              {Favorite ? <IconFavInactive /> : <IconFavActive />}
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.titlesection}>
          <IconLabelHouse />
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 6,
              }}>
              <Text style={{fontSize: 16, fontFamily: 'Nunito-Bold'}}>
                Puncak Indah Residence
              </Text>
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconLocation />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Nunito-SemiBold',
                  color: '#9B9B9B',
                  paddingLeft: 6,
                  paddingTop: 5,
                }}>
                Pondok Indah, Jakarta Selatan
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.furniturdetails}>
          <FurniturDetails />
          <View
            style={{
              borderBottomWidth: 0.25,
              paddingTop: 15,
              marginHorizontal: -15,
              borderColor: '#AAAAAA',
            }}
          />
        </View>
        <View style={styles.detaildescription}>
          <DetailDescription />
          <View style={{paddingTop: 10}}>
            <Details text="Type" subtext="House" />
            <Details text="Size" subtext="200 m2 Land ; 150 m2 Property" />
            <Details text="Build Date" subtext="N/A" />
            <Details text="Listing Type" subtext="Sell" />
            <Details text="Furnishing" subtext="Furnished" />
            <Details text="Certificate" subtext="Ownership" />
            <Details text="Sub-Type" subtext="House" />
            <Details text="Electricity" subtext="3500 Watt" />
            <Details text="Listing ID" subtext="1999888" />
          </View>
          <View style={{borderBottomWidth: 0.25, paddingTop: 10}} />
        </View>
        <View style={styles.locationsection}>
          <Text>Location</Text>
          <View style={{paddingTop: 10}}>
            <Image source={DummyMaps} style={{height: 166, width: '100%'}} />
          </View>
          <View style={styles.address}>
            <IconLocation />
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 14, fontFamily: 'Nunito-Regular'}}>
                Arteri St., Pondok Indah, Jakarta Selatan, DKI Jakarta
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Nunito-Regular',
                  color: '#9B9B9B',
                }}>
                Jakarta Selatan
              </Text>
            </View>
          </View>
          <View style={{borderBottomWidth: 0.25, paddingTop: 10}} />
        </View>
        <View style={styles.nearbysection}>
          <Text
            style={{fontSize: 12, fontFamily: 'Nunito-Bold', color: '#EB4C60'}}>
            Find Nearby Facility
          </Text>
          <IconBackRed />
        </View>
        <View
          style={{
            borderBottomWidth: 0.25,
            paddingTop: 10,
            marginHorizontal: 17,
          }}
        />
        <View style={styles.housesection}>
          <Text
            style={{fontSize: 14, fontFamily: 'Nunito-Bold', paddingBottom: 7}}>
            House ownership credit
          </Text>
          <Text
            style={{fontSize: 12, fontFamily: 'Nunito-Regular', maxWidth: 300}}>
            Based on a loan amount of 70% for a fixed installment of 20 years
            with an interest rate of 8.7%
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              justifyContent: 'space-between',
              width: 150,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Nunito-SemiBold',
                color: '#EB4C60',
              }}>
              Adjust installments
            </Text>
            <IconBackRed />
          </View>
          <View style={{borderBottomWidth: 0.25, paddingTop: 10}} />
        </View>
        <View style={styles.agentsection}>
          <Text style={{fontSize: 14, fontFamily: 'Nunito-Bold'}}>
            Listing Agent
          </Text>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Image
              source={DummyAgent}
              style={{width: 40, height: 40, borderRadius: 40 / 2}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 300,
              }}>
              <View style={{paddingLeft: 12, justifyContent: 'center', paddingRight: 12}}>
                <Text style={{fontSize: 12, fontFamily: 'Nunito-SemiBold'}}>
                  Michael Tan
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: 'Nunito-SemiBold',
                    color: '#505050',
                  }}>
                  PIM Real Estate Agent
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconStar />
                <Gap width={5} />
                <Text>4.4</Text>
                <Gap width={5} />
                <Text>(180)</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#AAAAAA',
              paddingTop: 10,
              marginHorizontal: -17,
            }}
          />
        </View>
        <View horizontal style={styles.similarsection}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Nunito-Bold',
              paddingBottom: 10,
            }}>
            Similar Property
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
      </ScrollView>
      <View style={styles.contactsection}>
        <View>
          <Text style={{fontSize: 10, fontFamily: 'Nunito-Regular'}}>
            Starts From
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito-SemiBold',
              color: '#EB4C60',
            }}>
            IDR 1.5M
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#EB4C60',
            width: 124,
            height: 42,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <IconContact />
          <Gap width={10} />
          <Text
            style={{color: 'white', fontSize: 14, fontFamily: 'Nunito-Bold'}}>
            Contact
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HouseSelected;

const styles = StyleSheet.create({
  page: {
    paddingBottom: 80,
  },
  image: {
    height: 276,
    width: '100%',
  },
  iconsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  titlesection: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  furniturdetails: {
    paddingHorizontal: 29,
    paddingTop: 15,
  },
  detaildescription: {
    paddingVertical: 15,
    paddingHorizontal: 17,
  },
  locationsection: {
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  address: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  nearbysection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 33,
  },
  housesection: {
    paddingHorizontal: 17,
    paddingTop: 10,
  },
  agentsection: {
    paddingHorizontal: 17,
    paddingVertical: 15,
  },
  similarsection: {
    paddingHorizontal: 17,
    paddingBottom: 15,
  },
  contactsection: {
    width: 314,
    height: 66,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 45,
    marginTop: 650,
  },
});
