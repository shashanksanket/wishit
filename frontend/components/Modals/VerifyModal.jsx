// Import necessary components and modules
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Button, Divider, FormControl, Input } from 'native-base';
import DisabledButton from '../Buttons/DisabledButton';
import EnabledButton from '../Buttons/EnabledButton';

// Define the VerifyModal component
const VerifyModal = ({ isVisible }) => {

  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpSent, setOtpSent] = useState(false);

  const handleOtpInputChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    // Move to the next input field if a digit is entered
    if (index < 3 && value.length === 1) {
      const nextInput = index + 1;
      // Focus the next TextInput
      this[`otpInput${nextInput}`].focus();
    }

    setOtp(updatedOtp);
  };

  const verifyOtp = () => {
    // Combine the OTP digits to form the complete OTP
    const completeOtp = otp.join('');
    console.log(completeOtp)
    // TODO: Implement OTP verification logic here

    // For now, let's just navigate to a success screen
    // navigation.navigate('SuccessScreen');
  };

  const handleInputFocus = (index) => {
    setFocusedInput(index);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleResendOTP = () => {
    setOtpSent(true);
    setTimer(60);
  }

  useEffect(() => {
    const allFieldsFilled = otp.every((digit) => digit.length === 1);
    setIsOtpComplete(allFieldsFilled);
  }, [otp]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setOtpSent(false);
      setTimer(60);
    }
  }, [timer]);

  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0, marginHorizontal: 0, justifyContent: 'flex-end' }}
    >
      <View style={styles.bottomSheet}>
        <Text style={styles.heading}>Verifying your OTP</Text>
        <Text style={styles.subHeading}>We’ve sent OTP to the mobile number you provided. Please check your messages and enter the OTP.</Text>
        <FormControl>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={[
                  styles.otpInput,
                  { borderColor: focusedInput === index ? '#5F27FF' : '#d5d6dc' },
                ]}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpInputChange(index, value)}
                onFocus={() => handleInputFocus(index)}
                onBlur={handleInputBlur}
                ref={(ref) => (this[`otpInput${index}`] = ref)}
              />
            ))}
          </View>
        </FormControl>

        <View style={styles.resendContainer}>
          {/* <Text>Resend in 43 seconds</Text> */}
          {otpSent ? (
            <Text style={styles.otpSentText}>OTP Sent</Text>
          ) : (
            <Text style={styles.otpSentText}>Resend in {timer} seconds</Text>
          )}
          <Text style={styles.resendBtn} onPress={handleResendOTP} >Resend OTP</Text>
        </View>

        {!isOtpComplete ? (
          <DisabledButton text="Verify OTP" />
        ) : (
          <EnabledButton text="Verify OTP" handler={verifyOtp} />
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
  );
};

// Define the styles using StyleSheet.create
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  input: {
    display: 'flex',
    height: 44,
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: 70,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#676B89',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'GTWBold',
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 24,
    color: '#676B89',
    fontFamily: 'GTWRegular',
  },
  footerText: {
    color: '#676B89',
  },
  buttonText: {
    color: '#979DB5',
    fontSize: 16,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  otpInput: {
    borderWidth: 1,

    fontSize: 18,
    textAlign: 'center',
    width: 80,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#FFF',
    borderColor: "#d5d6dc",
    borderWidth: 2
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  otpSentText: {
    fontFamily: 'GTWRegular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: "400",
    color: "#676B89"
  },
  resendBtn: {
    fontFamily: 'GTWBold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: "700",
    color: "#BAC0D2"
  }
});

// Export the VerifyModal component
export default VerifyModal;
