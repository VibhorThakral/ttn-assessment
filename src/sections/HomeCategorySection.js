import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MajorServicesCategories from '../components/MajorServicesCategories.js';
import OtherServicesCategories from '../components/OtherServicesCategories.js';
import {
  medicineicon,
  microscopeicon,
  consultationicon,
} from '../assets/categoryIcons/index';

const majorCategoryData = [
  {
    image: medicineicon,
    title: 'Medicines',
  },
  {
    image: microscopeicon,
    title: 'Tests & Packages',
  },
  {
    image: consultationicon,
    title: 'Online Consultation',
  },
];

class HomeCategorySection extends Component {
  render() {
    return (
      <View>
        <View style={styles.majorCategoriesContainer}>
          {majorCategoryData.map((card, index) => {
            return (
              <MajorServicesCategories
                key={index}
                imageSource={card.image}
                imageTitle={card.title}
              />
            );
          })}
        </View>
        <OtherServicesCategories />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  majorCategoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default HomeCategorySection;
