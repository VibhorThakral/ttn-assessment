import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from '../utils/Preview';

const ImageData = [
  {
    image:
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    image:
      'https://images.pexels.com/photos/4210558/pexels-photo-4210558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    image:
      'https://images.pexels.com/photos/4197564/pexels-photo-4197564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    image:
      'https://images.pexels.com/photos/3873169/pexels-photo-3873169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    image:
      'https://images.pexels.com/photos/3683046/pexels-photo-3683046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

class HomeBannerSection extends Component {
  render() {
    return (
      <View style={styles.sliderMainContainer}>
        <FlatListSlider
          data={ImageData}
          width={275}
          timer={5000}
          local
          component={<Preview />}
          onPress={item => null}
          indicatorActiveWidth={20}
          contentContainerStyle={styles.FlatListContainer}
          indicatorContainerStyle={styles.IndicatorContainer}
          indicatorActiveColor={'orange'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderMainContainer: {
    marginTop: -15,
    marginBottom: -25,
  },
  FlatListContainer: {
    paddingHorizontal: 16,
  },
  IndicatorContainer: {
    position: 'absolute',
    bottom: 40,
    left: 10,
  },
});

export default HomeBannerSection;
