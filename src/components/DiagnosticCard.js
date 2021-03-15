import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import CardBackgroundImage from '../assets/diagnosticback.png';

const DiagnosticCard = ({
  keyValue,
  title,
  maxPrice,
  discountPrice,
  discountPercent,
  testCount,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} key={keyValue}>
      <View
        style={[
          styles.diagnosticDetails,
          {backgroundColor: keyValue % 2 == 0 ? '#EAE0EF' : '#D3D4E4'},
        ]}>
        <View style={styles.tagTextContainer}>
          <Text style={styles.tagText}>Advanced</Text>
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.testCount}>{testCount} tests included</Text>
      </View>
      <View style={styles.diagnosticPrice}>
        <Image source={CardBackgroundImage} style={styles.backgroundImage} />
        <Text style={styles.maxPrice}>₹ {maxPrice}.00 </Text>
        <View style={styles.currentPriceRow}>
          <Text style={styles.discountPrice}>₹ {discountPrice}.00</Text>
          <View style={styles.dashedBorder}>
            <Text style={styles.discountPercent}>{discountPercent}% off</Text>
          </View>
        </View>
        <Text style={styles.labText}>
          <Text style={styles.textHeavy}>Zoylo</Text>
          <Text>Labs</Text>
        </Text>
        <TouchableOpacity>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginRight: 10,
    width: 165,
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
  diagnosticDetails: {
    padding: 10,
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tagTextContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    maxWidth: 100,
    marginBottom: 20,
  },
  tagText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 30,
  },
  testCount: {
    color: 'gray',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  diagnosticPrice: {
    backgroundColor: 'white',
    padding: 10,
    overflow: 'hidden',
  },
  maxPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginBottom: 10,
  },
  currentPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  discountPrice: {
    color: 'darkgreen',
    fontSize: 16,
    fontWeight: '600',
  },
  dashedBorder: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkgreen',
    borderStyle: 'dashed',
    paddingHorizontal: 5,
  },
  discountPercent: {
    padding: 2,
    color: 'darkgreen',
    fontSize: 13,
  },
  labText: {
    color: 'rgba(142,92,166,0.4)',
    textTransform: 'uppercase',
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 5,
  },
  textHeavy: {
    fontWeight: '600',
  },
  bookText: {
    color: 'orange',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 16,
  },
  backgroundImage: {
    position: 'absolute',
    height: 64,
    width: 64,
    bottom: -20,
    right: -10,
    opacity: 0.4,
  },
});

export default DiagnosticCard;
