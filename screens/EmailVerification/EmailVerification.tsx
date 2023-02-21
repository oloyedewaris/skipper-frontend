import { Box, Text, View, Heading, Image } from 'native-base';
import { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import AuthButton from '../../components/Button/AuthButton';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeNavigationList } from '../../types/navigation.type';
// import OtpInputs from 'react-native-otp-inputs';

const EmailVerification = () => {
  const navigation = useNavigation<StackNavigationProp<HomeNavigationList>>()
  const [isVerified, setIsVerified] = useState(false)

  const handleSubmit = () => {
    setIsVerified(true)
  }

  return (
    <SafeAreaView style={{ height: '100%', justifyContent: 'flex-start' }}>
      {!isVerified ? (
        <Box width='90%' mx='auto'>
          <View justifyContent='center' alignItems='center'>
            <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => navigation.goBack()}>
              <MaterialIcons name='keyboard-arrow-left' size={35} />
            </TouchableOpacity>
            <Image alt='email verification' mt='5' w='184' h='184' source={require('../../assets/email_verification.png')} />
          </View>
          <View mt='40px'>
            <Heading color='#3A3A3A' fontWeight={600} size='xl'>Email verification</Heading>
            <Text mt='8px' color='#3A3A3A'>Type in the 6 digit code that has been sent to the email address you provided in the spaces below.</Text>
          </View>
          <View w='100%'>
            {/* <OtpInputs
              autofillFromClipboard
              handleChange={code => console.log(code)}
              numberOfInputs={6}
            /> */}
          </View>
          <AuthButton mt='64px' onPress={handleSubmit}>Verify account</AuthButton>
          <Text mt='65px' color='#3A3A3A' textAlign='center'>
            Did not receive a code?
            <Text color='primary.600'> Resend code</Text>
          </Text>
        </Box>
      ) : (
        <Box width='90%' mx='auto'>
          <View justifyContent='center' alignItems='center'>
            <Image alt='email verification' mt='5' w='184' h='184' source={require('../../assets/success.png')} />
          </View>
          <View mt='40px'>
            <Heading color='#3A3A3A' fontWeight={600} size='xl'>Email verified</Heading>
            <Text mt='8px' color='#3A3A3A'>Continue to create a transaction PIN.</Text>
          </View>
          <AuthButton mt='64px' onPress={() => navigation.navigate('Create pin')}>Continue</AuthButton>
        </Box>
      )}
    </SafeAreaView>
  )
}

export default EmailVerification;