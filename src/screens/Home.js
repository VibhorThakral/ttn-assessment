import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeHeaderSection from '../sections/HomeHeaderSection';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HomeHeaderSection />
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
