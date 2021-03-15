import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MajorServicesCategories from '../components/MajorServicesCategories.js';
import OtherServicesCategories from '../components/OtherServicesCategories.js';
import {
  medicineicon,
  microscopeicon,
  consultationicon,
  homecareicon,
  packageicon,
  stethoicon,
  wellnessicon,
  zoyicon,
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

const otherCategoryData = [
  {
    image: stethoicon,
    title: 'Doctor Appointment',
  },
  {
    image: wellnessicon,
    title: 'Wellness Packages',
  },
  {
    image: zoyicon,
    title: 'Ask Zoy',
  },
  {
    image: homecareicon,
    title: 'Home Healthcare',
  },
  {
    image: packageicon,
    title: 'Hospital Packages',
  },
];

class HomeCategorySection extends Component {
  render() {
    return (
      <View>
        <View style={styles.categoriesContainer}>
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
        <View
          style={[styles.categoriesContainer, styles.otherCategoriesContainer]}>
          {otherCategoryData.map((card, index) => {
            return (
              <OtherServicesCategories
                key={index}
                imageSource={card.image}
                imageTitle={card.title}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  otherCategoriesContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default HomeCategorySection;
