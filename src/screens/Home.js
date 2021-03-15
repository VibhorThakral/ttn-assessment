import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeHeaderSection from '../sections/HomeHeaderSection';
import HomeCategorySection from '../sections/HomeCategorySection';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HomeHeaderSection />
        <HomeCategorySection />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
