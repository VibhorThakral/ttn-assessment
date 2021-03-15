import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class LongBannerView extends Component {
  render() {
    return (
      <View>
        {/* Banner One */}
        <View style={[styles.banner, styles.bannerOne]}>
          <View>
            <Text style={styles.bannerHeading}>
              Order Medicine using prescription
            </Text>
            <Text style={styles.bannerSubText}>
              & Get Medicines Delivered at Home
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnMain}>
              <Text style={styles.btnTextMain}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner Two */}
        <View style={[styles.banner, styles.bannerOne]}>
          <View>
            <Text style={styles.bannerHeading}>Online Doctor Consultation</Text>
            <Text style={styles.bannerSubText}>
              Consult with the top medical practitioners in your city. Recover
              from the comfort of your home.
            </Text>
          </View>
          <View>
            <TouchableOpacity style={[styles.btnMain, styles.btnSecondary]}>
              <Text style={[styles.btnTextMain, styles.btnSecondaryText]}>
                Consult Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner Three */}
        <View style={[styles.banner, styles.bannerOne]}>
          <View>
            <Text style={styles.bannerHeading}>
              Take Free Online Health Assessment
            </Text>
            <Text style={styles.bannerSubText}>
              Know Your Health Status now!
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnMain}>
              <Text style={styles.btnTextMain}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner Four */}
        <View style={[styles.banner, styles.bannerOne]}>
          <View>
            <Text style={styles.bannerHeadingTwo}>Corporate health plans</Text>
            <Text style={styles.bannerHeadingTwo}>Just for your workplace</Text>
            <View>
              <TouchableOpacity>
                <Text style={styles.clickableText}>
                  Login To Your Corporate Account To Avail Multiple Benefits
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
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
  bannerHeading: {
    fontSize: 20,
    maxWidth: 200,
    color: '#11121c',
    letterSpacing: 1.2,
  },
  bannerHeadingTwo: {
    fontSize: 20,
    color: '#11121c',
    letterSpacing: 1.2,
  },
  bannerSubText: {
    color: 'gray',
    marginTop: 10,
    maxWidth: 250,
  },
  btnMain: {
    borderWidth: 1,
    borderColor: 'orange',
    paddingVertical: 12,
    borderRadius: 10,
    width: 125,
  },
  btnSecondary: {
    backgroundColor: 'orange',
  },
  btnTextMain: {
    color: 'orange',
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  btnSecondaryText: {
    color: 'white',
  },
  clickableText: {
    color: 'orange',
    marginTop: 10,
  },
});

export default LongBannerView;
