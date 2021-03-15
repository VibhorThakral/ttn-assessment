import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MedicineCard = ({keyValue, imageTitle, imageSource}) => {
  return (
    <TouchableOpacity key={keyValue}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={imageSource} />
        <Text style={styles.text}>{imageTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
    width: 150,
    marginTop: 10,
    marginRight: 10,
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
    height: 40,
    width: 40,
    marginBottom: 20,
  },
  text: {
    color: '#333',
    textAlign: 'center',
    fontSize: 15,
    maxWidth: 90,
  },
});

export default MedicineCard;
