import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeHeaderSection from '../sections/HomeHeaderSection';
import HomeCategorySection from '../sections/HomeCategorySection';
import HomeDiagnosticPackageSection from '../sections/HomeDiagnosticPackageSection';
import {ScrollView} from 'react-native-gesture-handler';
import HomeLongBannerSection from '../sections/HomeLongBannerSection';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HomeHeaderSection />
          <HomeCategorySection />
          <HomeDiagnosticPackageSection />
          <HomeLongBannerSection />
        </ScrollView>
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
