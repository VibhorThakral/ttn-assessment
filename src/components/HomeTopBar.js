import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import brandLogo from '../assets/zoylo_logo.png';
import {markericon, carticon} from '../assets/icons/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

class HomeTopBar extends Component {
  render() {
    return (
      <View style={styles.HomeTopBarContainer}>
        <View>
          <Image source={brandLogo} />
        </View>
        <View style={styles.topBarRight}>
          <TouchableOpacity>
            <Image style={styles.image} source={markericon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.shoppingCart}>
              <View style={styles.cartcount}>
                <Text>0</Text>
              </View>
              <Image
                style={[styles.image, styles.cartimage]}
                source={carticon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeTopBarContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.75)',
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
