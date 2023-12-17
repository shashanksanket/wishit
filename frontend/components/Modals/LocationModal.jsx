import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { Button, Divider, FormControl, Input, NumberInputField } from 'native-base';
import DisabledButton from '../Buttons/DisabledButton';
import EnabledButton from '../Buttons/EnabledButton';


const LocationModal = ({ isVisible, handler1, handler2 }) => {

  const [phoneNo, setPhoneNo] = useState('');

  const handlePhoneNoChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');

    setPhoneNo(numericValue);
    setIsValidPhone(/^\d{10}$/.test(numericValue));
  };



  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <View style={styles.bottomSheet}>
        <Text style={styles.heading}>What's your location</Text>
        <Text style={styles.subHeading}>We need your location to show available services, restaurants & products.</Text>



        <View>
          <EnabledButton text="Get OTP" handler={handler1} imageSrc={".././assets/images/gps.svg"} />

          <DisabledButton text="Get OTP" />
        </View>



      </View>
    </Modal>
  )
}

export default LocationModal

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f1f5',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
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
    fontFamily: "GTARegular"
  },
  footer: {
    marginTop: 70,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#676B89',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 5,
    fontFamily: 'GTABold'
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 32,
    color: '#676B89',
    fontFamily: "GTWRegular"
  },
  footerText: {
    color: '#676B89',
  },
  buttonText: {
    color: '#979DB5',
    fontSize: 16,
  },
})