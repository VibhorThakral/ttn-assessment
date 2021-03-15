import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  healthcareicon,
  ayurvedaicon,
  homeopathyicon,
  medkiticon,
} from '../assets/categoryIcons/index';
import MedicineCard from '../components/MedicineCard';

const medicineCategoriesData = [
  {
    title: 'Healthcare Products',
    image: healthcareicon,
  },
  {
    title: 'Ayurveda',
    image: ayurvedaicon,
  },
  {
    title: 'Homeopathy',
    image: homeopathyicon,
  },
  {
    title: 'Surgicals & Devices',
    image: medkiticon,
  },
];

class HomeLongBannerSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.medicineCategoryHeadingText}>
          Medicine Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesContainer}>
            {medicineCategoriesData.map((medCard, index) => {
              return (
                <MedicineCard
                  keyValue={index}
                  imageTitle={medCard.title}
                  imageSource={medCard.image}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  medicineCategoryHeadingText: {
    fontSize: 16,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default HomeLongBannerSection;
