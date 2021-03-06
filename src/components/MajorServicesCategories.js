import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

const MajorServicesCategories = ({keyValue, imageSource, imageTitle}) => {
  return (
    <TouchableOpacity style={styles.card} key={keyValue}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.text}>{imageTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 115,
    width: 115,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    height: 35,
    width: 35,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default MajorServicesCategories;
