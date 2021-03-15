import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const OtherServicesCategories = ({keyValue, imageSource, imageTitle}) => {
  return (
    <TouchableOpacity style={styles.card} key={keyValue}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <Text style={styles.text}>{imageTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    maxWidth: 75,
    color: 'gray',
  },
});

export default OtherServicesCategories;
