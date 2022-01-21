import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {IconBookmark, IconClose} from '../../assets';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  AdditionalKeyword,
  Bathrooms,
  Bedrooms,
  Furnishing,
  Gap,
  PropertyType,
  SearchBuy,
  ButtonFilter,
  ButtonReset,
} from '../../components';
import Slider from '@react-native-community/slider';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#EB4C60'}}
    style={{backgroundColor: 'white'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#EB4C60' : '#9B9B9B',
          // margin: 8,
          fontSize: 16,
          fontFamily: 'Nunito-SemiBold',
        }}>
        {route.title}
      </Text>
    )}
  />
);

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 'any',
      bedrooms: 'any',
      bathrooms: 'any',
      furnishing: 'any',
    };
  }

  clickProperty(value) {
    this.setState({
      property: value,
    });
  }

  clickBedrooms(value) {
    this.setState({
      bedrooms: value,
    });
  }

  clickBathrooms(value) {
    this.setState({
      bathrooms: value,
    });
  }

  clickFurnishing(value) {
    this.setState({
      furnishing: value,
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: '#FFF6F7', padding: 23, marginBottom: 85}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.location}>Location</Text>
              <Text style={styles.area}>Choose Area</Text>
            </View>
            <View style={styles.searchbuy}>
              <SearchBuy />
              <Gap height={10} />
            </View>
            <View style={styles.property}>
              <Text style={styles.location}>Property Type</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 0.2,
                  borderColor: '#FFC9CF',
                }}>
                <PropertyType
                  title="any"
                  onPress={() => this.clickProperty('any')}
                  active={this.state.property === 'any' ? true : false}
                />
                <PropertyType
                  title="House"
                  onPress={() => this.clickProperty('House')}
                  active={this.state.property === 'House' ? true : false}
                />
                <PropertyType
                  title="Apartment"
                  onPress={() => this.clickProperty('Apartment')}
                  active={this.state.property === 'Apartment' ? true : false}
                />
                <PropertyType
                  title="Office"
                  onPress={() => this.clickProperty('Office')}
                  active={this.state.property === 'Office' ? true : false}
                />
                <PropertyType
                  title="Kost-an"
                  onPress={() => this.clickProperty('Kost-an')}
                  active={this.state.property === 'Kost-an' ? true : false}
                />
              </ScrollView>
            </View>
            <View style={styles.pricerange}>
              <Text style={styles.location}>Price Range</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Nunito-Bold',
                  color: '#EB4C60',
                }}>
                Any Price Range
              </Text>
            </View>
            <View style={{borderBottomWidth: 0.2, borderColor: '#FFC9CF'}}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFD6DB"
                maximumTrackTintColor="#EB4C60"
                thumbTintColor="pink"
                borderColor="#EB4C60"
              />
            </View>
            <View>
              <Text style={styles.location}>Bedrooms</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 0.2,
                  borderColor: '#FFC9CF',
                }}>
                <Bedrooms
                  title="any"
                  onPress={() => this.clickBedrooms('any')}
                  active={this.state.bedrooms === 'any' ? true : false}
                />
                <Bedrooms
                  title="Studio"
                  onPress={() => this.clickBedrooms('Studio')}
                  active={this.state.bedrooms === 'Studio' ? true : false}
                />
                <Bedrooms
                  title="1"
                  onPress={() => this.clickBedrooms('1')}
                  active={this.state.bedrooms === '1' ? true : false}
                />
                <Bedrooms
                  title="2"
                  onPress={() => this.clickBedrooms('2')}
                  active={this.state.bedrooms === '2' ? true : false}
                />
                <Bedrooms
                  title="3"
                  onPress={() => this.clickBedrooms('3')}
                  active={this.state.bedrooms === '3' ? true : false}
                />
                <Bedrooms
                  title="4"
                  onPress={() => this.clickBedrooms('4')}
                  active={this.state.bedrooms === '4' ? true : false}
                />
              </ScrollView>
            </View>
            <View style={styles.property}>
              <Text style={styles.location}>Bathrooms</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 0.2,
                  borderColor: '#FFC9CF',
                }}>
                <Bathrooms
                  title="any"
                  onPress={() => this.clickBathrooms('any')}
                  active={this.state.bathrooms === 'any' ? true : false}
                />
                <Bathrooms
                  title="1"
                  onPress={() => this.clickBathrooms('1')}
                  active={this.state.bathrooms === '1' ? true : false}
                />
                <Bathrooms
                  title="2"
                  onPress={() => this.clickBathrooms('2')}
                  active={this.state.bathrooms === '2' ? true : false}
                />
                <Bathrooms
                  title="3"
                  onPress={() => this.clickBathrooms('3')}
                  active={this.state.bathrooms === '3' ? true : false}
                />
                <Bathrooms
                  title="4"
                  onPress={() => this.clickBathrooms('4')}
                  active={this.state.bathrooms === '4' ? true : false}
                />
                <Bathrooms
                  title="5+"
                  onPress={() => this.clickBathrooms('5+')}
                  active={this.state.bathrooms === '5+' ? true : false}
                />
              </ScrollView>
            </View>
            <View>
              <View style={styles.pricerange}>
                <Text style={styles.location}>Property Size</Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito-Bold',
                    color: '#EB4C60',
                  }}>
                  Any Size
                </Text>
              </View>
              <View style={{borderBottomWidth: 0.2, borderColor: '#FFC9CF'}}>
                <Slider
                  style={{width: '100%', height: 40}}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor="#FFD6DB"
                  maximumTrackTintColor="#EB4C60"
                  thumbTintColor="pink"
                  borderColor="#EB4C60"
                />
              </View>
            </View>
            <View style={styles.pricerange}>
              <Text style={styles.location}>Land Size</Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Nunito-Bold',
                  color: '#EB4C60',
                }}>
                Any Size
              </Text>
            </View>
            <View style={{borderBottomWidth: 0.2, borderColor: '#FFC9CF'}}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFD6DB"
                maximumTrackTintColor="#EB4C60"
                thumbTintColor="pink"
                borderColor="#EB4C60"
              />
            </View>
            <View style={styles.property}>
              <Text style={styles.location}>Property Type</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottomWidth: 0.2,
                  borderColor: '#FFC9CF',
                }}>
                <Furnishing
                  title="any"
                  onPress={() => this.clickFurnishing('any')}
                  active={this.state.furnishing === 'any' ? true : false}
                />
                <Furnishing
                  title="Furnished"
                  onPress={() => this.clickFurnishing('Furnished')}
                  active={this.state.furnishing === 'Furnished' ? true : false}
                />
                <Furnishing
                  title="Unfurnished"
                  onPress={() => this.clickFurnishing('Unfurnished')}
                  active={
                    this.state.furnishing === 'Unfurnished' ? true : false
                  }
                />
              </ScrollView>
            </View>
            <View style={{marginTop: 10}}>
              <View style={{paddingBottom: 10}}>
                <Text style={{fontSize: 16, fontFamily: 'Nunito-SemiBold'}}>
                  Additional Keyword
                </Text>
              </View>
              <AdditionalKeyword />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
            position: 'absolute',
            // marginTop: '95%',
            // marginLeft: 30,
            bottom: 0,
            alignSelf: 'center',
            marginBottom: '10%'
          }}>
          <ButtonFilter title="Show 100+ Properties" />
          <Gap width={10} />
          <ButtonReset type="secondary" title="Reset" />
        </View>
      </View>
    );
  }
}

const Rent = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  1: Buy,
  2: Rent,
  3: Buy,
});

const FilteredSearch = ({navigation, onPress}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Buy'},
    {key: '2', title: 'Rent'},
    {key: '3', title: 'Sell'},
  ]);

  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <IconClose onPress={onPress} onPress={() => navigation.goBack('')} />
          <Text style={styles.text}>Filter</Text>
          <IconBookmark />
        </View>
        <View style={{flex: 1, backgroundColor: '#FFF6F7'}}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </View>
    </View>
  );
};

export default FilteredSearch;

const styles = StyleSheet.create({
  page: {
    // padding: 23,
    flex: 1,
    backgroundColor: '#FFF6F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 23,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Nunito-Bold',
  },
  searchbuy: {
    paddingTop: 12,
    borderBottomWidth: 0.2,
    borderColor: '#FFC9CF',
  },
  location: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  area: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: '#EB4C60',
    textDecorationStyle: 'solid',
  },
  property: {
    paddingTop: 10,
  },
  pricerange: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
