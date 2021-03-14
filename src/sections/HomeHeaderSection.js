import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeTopBar from '../components/HomeTopBar.js';
import HomeBannerSection from '../components/HomeBannerSection.js';

class HomeHeaderSection extends Component {
  render() {
    return (
      <View style={styles.HomeHeaderSectionContainer}>
        <HomeTopBar />
        <HomeBannerSection />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeHeaderSection;
