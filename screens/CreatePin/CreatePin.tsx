import { Box, Text, View, Heading, Image } from 'native-base';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import AuthButton from '../../components/Button/AuthButton';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeNavigationList } from '../../types/navigation.type';

const CreatePin = () => {
  const navigation = useNavigation<StackNavigationProp<HomeNavigationList>>()
  const [status, setStatus] = useState('create')

  return (
    <SafeAreaView style={{ height: '100%', justifyContent: 'flex-start' }}>
      {status === 'create' ? (
        <Box width='90%' mx='auto'>
          <View mt='40px'>
            <Heading color='#3A3A3A' fontWeight={600} size='xl'>Create PIN</Heading>
            <Text mt='8px' color='#3A3A3A'>Create a 4 digit pin for completing your transactions on the app.</Text>
          </View>
          <Text color='primary.600' textAlign='center' mt='28px'>Visible</Text>
          <AuthButton mt='56px' onPress={() => setStatus('confirm')}>Create PIN</AuthButton>
        </Box>
      ) : status === 'confirm' ? (
        <Box width='90%' mx='auto'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={{ alignSelf: 'flex-start' }} name='arrow-left' size={35} />
          </TouchableOpacity>
          <View mt='40px'>
            <Heading color='#3A3A3A' fontWeight={600} size='xl'>Confirm PIN</Heading>
            <Text mt='8px' color='#3A3A3A'>Retype the 4 digit pin for completing your transactions on the app.</Text>
          </View>
          <Text color='primary.600' textAlign='center' mt='28px'>Visible</Text>
          <AuthButton mt='56px' onPress={() => setStatus('succes')}>Create PIN</AuthButton>
        </Box>
      ) : (
        <Box width='90%' mx='auto'>
          <View justifyContent='center' alignItems='center'>
            <Image alt='email verification' mt='5' w='184' h='184' source={require('../../assets/success.png')} />
          </View>
          <View mt='40px'>
            <Heading color='#3A3A3A' fontWeight={600} size='xl'>PIN created successfully</Heading>
            <Text mt='8px' color='#3A3A3A'>Continue to mobile app.</Text>
          </View>
          <AuthButton mt='64px' onPress={() => navigation.navigate('Create pin')}>Continue to account</AuthButton>
        </Box>
      )}
    </SafeAreaView>
  )
}

export default CreatePin;