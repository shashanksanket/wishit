import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button, FormControl, Icon, Divider } from 'native-base';
import { MaterialIcons } from 'react-native-vector-icons';
import LoginModal from '../components/Modals/LoginModal';
import VerifyModal from '../components/Modals/VerifyModal';
import LocationModal from '../components/Modals/LocationModal';

export default function Location({ navigation }) {
  const [isLocationModalVisible, setIsLocationModalVisible] = useState(true);
  const [isSelectLocationModalVisible, setIsSelectLocationModalVisible] = useState(false);
  const [username, setUsername] = useState('');

  const toggleBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const handleAllowLocationAccess = () => {
    console.log("Current location access granted")
  };

  const handleEnterLocationManually = () => {
    setIsLocationModalVisible(false)
    setIsSelectLocationModalVisible(true)
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/BG.png')} style={styles.backgroundImage}>

        {isLocationModalVisible && (
          <LocationModal isVisible={isLocationModalVisible} handler1={handleAllowLocationAccess} handler2={handleEnterLocationManually} />
        )}

        {/* {isSelectLocationModalVisible && (
          <VerifyModal isVisible={isVerifyModalVisible} />
        )} */}

        {/* <VerifyModal isVisible={true} /> */}

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 16,
    color: '#676B89',
  },
  button: {
    backgroundColor: '#f0f1f5',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#979DB5',
    fontSize: 16,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 25,
    paddingTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputLeftText: {
    color: '#979DB5',
    marginLeft: 15,
  },
  footer: {
    marginTop: 70,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#676B89',

  },
  footerText: {
    color: '#676B89',

  },

});
