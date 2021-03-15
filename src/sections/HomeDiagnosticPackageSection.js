import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DiagnosticCard from '../components/DiagnosticCard';

const diagnosticData = [
  {
    title: 'Zoylo Young Female Health Checkup',
    testCount: 93,
    MaxPrice: 5500,
    DiscountPrice: 2699,
    DiscountPercent: 51,
  },
  {
    title: 'Zoylo Health Checkup with Iron Studies',
    testCount: 83,
    MaxPrice: 3250,
    DiscountPrice: 1299,
    DiscountPercent: 60,
  },
  {
    title: 'Zoylo Elderly Male Health Checkup',
    testCount: 110,
    MaxPrice: 8500,
    DiscountPrice: 4250,
    DiscountPercent: 50,
  },
  {
    title: 'Zoylo Full Body Health Checkup',
    testCount: 81,
    MaxPrice: 3450,
    DiscountPrice: 999,
    DiscountPercent: 71,
  },
  {
    title: 'Zoylo Kids Exclusive Health Checkup',
    testCount: 58,
    MaxPrice: 3850,
    DiscountPrice: 1699,
    DiscountPercent: 56,
  },
];

class HomeDiagnosticPackageSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.diagnosticHeadingBar}>
          <Text style={styles.diagnosticHeadingText}>
            Diagnostic Packages by Zoylo Labs
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}>
          {diagnosticData.map((dataItem, index) => (
            <DiagnosticCard
              keyValue={index}
              title={dataItem.title}
              maxPrice={dataItem.MaxPrice}
              discountPrice={dataItem.DiscountPrice}
              discountPercent={dataItem.DiscountPercent}
              testCount={dataItem.testCount}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  diagnosticHeadingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  diagnosticHeadingText: {
    fontSize: 16,
  },
  viewAllText: {
    color: 'orange',
    fontSize: 15,
  },
});

export default HomeDiagnosticPackageSection;
