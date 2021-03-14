import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import brandLogo from '../assets/zoylo_logo.png';
import {markericon, carticon} from '../assets/icons/index';

class HomeTopBar extends Component {
  render() {
    return (
      <View style={styles.HomeTopBarContainer}>
        <View>
          <Image source={brandLogo} />
        </View>
        <View style={styles.topBarRight}>
          <Image style={styles.image} source={markericon} />
          <View style={styles.shoppingCart}>
            <View style={styles.cartcount}>
              <Text>0</Text>
            </View>
            <Image style={[styles.image, styles.cartimage]} source={carticon} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeTopBarContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 35,
    width: 35,
    marginHorizontal: 10,
  },
  topBarRight: {
    flexDirection: 'row',
  },
  shoppingCart: {
    borderLeftColor: '#220375',
    borderLeftWidth: 1,
  },
  cartcount: {
    position: 'absolute',
    height: 20,
    width: 20,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    zIndex: 2,
    shadowColor: '#aaa',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});

export default HomeTopBar;
