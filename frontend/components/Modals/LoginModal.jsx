import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { Button, Divider, FormControl, Input, NumberInputField } from 'native-base';
import DisabledButton from '../Buttons/DisabledButton';
import EnabledButton from '../Buttons/EnabledButton';

const LoginModal = ({ isVisible, handler }) => {

  const [phoneNo, setPhoneNo] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);

  const handlePhoneNoChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, '');

    setPhoneNo(numericValue);
    setIsValidPhone(/^\d{10}$/.test(numericValue));
  };

  const getOtpHandler = () => {
    console.log(phoneNo)
  }

  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <View style={styles.bottomSheet}>
        <Text style={styles.heading}>Log in or Sign up</Text>
        <Text style={styles.subHeading}>Enter your mobile number to get an OTP</Text>
        <FormControl>
          <FormControl.Label _text={{ color: '#303A47', fontSize: 'lg', bold: '700', fontFamily:'GTWMedium'}}>
            Mobile Number
          </FormControl.Label>
          <Input
            value={phoneNo}
            keyboardType="numeric"
            onChangeText={handlePhoneNoChange}
            w={{ base: '100%', md: '5%' }}
            style={{fontFamily : 'GTWRegular', fontSize: 14}}
            InputLeftElement={
              <>
                <Text style={styles.inputLeftText}>+91</Text>
                <Divider orientation="vertical" height={6} ml={3} mr={2} borderColor="#979DB5" />
              </>
            }
            placeholder="Enter your phone number"
            
          />
        </FormControl>
        
        {isValidPhone ? (

          <EnabledButton text="Get OTP" handler={getOtpHandler} />
        ) : (
          <DisabledButton text="Get OTP" />

        )}
        <View style={styles.footer}>
          <Text style={styles.footerText}>By continuing, you agree to our</Text>
          <Text style={styles.footerText}>
            <Text style={{ textDecorationLine: 'underline' }}>Terms of Service</Text>{'    '}
            <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>{'    '}
            <Text style={{ textDecorationLine: 'underline' }}>Content Privacy</Text>
          </Text>
        </View>
      </View>
    </Modal>
  )
}

export default LoginModal

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