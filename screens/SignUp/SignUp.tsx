import { Box, Text, View, Heading } from 'native-base';
import { SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import AuthInput from '../../components/Input/AuthInput';
import AuthPasswordInput from '../../components/Input/AuthPasswordInput';
import { useState } from 'react';
import AuthButton from '../../components/Button/AuthButton';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeNavigationList } from '../../types/navigation.type';

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password Too Short!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Password Too Short!')
    .required('Required')
});

type formType = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<HomeNavigationList>>()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (values: formType) => {
    navigation.navigate('Email Verification')
  }

  return (
    <SafeAreaView style={{ justifyContent: 'center' }}>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => onSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Box height='90%' width='90%' justifyContent='space-between' mx='auto'>
            <View>
              <Heading fontWeight={600} color='#3A3A3A' size='xl'>Let’s get started</Heading>
              <Text color='#3A3A3A' mt='8px'>You are just a few steps away from creating your SKIPPER  account.</Text>
            </View>
            <View w='100%'>
              <AuthInput
                error={(errors.firstname && touched.firstname) ? errors.firstname : ''}
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
                placeholder='First name' />
              <AuthInput
                error={(errors.lastname && touched.lastname) ? errors.lastname : ''}
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
                placeholder='Last name' />
              <AuthInput
                error={(errors.phone && touched.phone) ? errors.phone : ''}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                placeholder='Phone umber' />
              <AuthInput
                error={(errors.email && touched.email) ? errors.email : ''}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Email address' />
              <AuthPasswordInput
                error={(errors.password && touched.password) ? errors.password : ''}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                show={showPassword}
                setShow={setShowPassword}
                placeholder='Password' />
              <AuthPasswordInput
                error={(errors.confirmPassword && touched.confirmPassword) ? errors.confirmPassword : ''}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                show={showConfirmPassword}
                setShow={setShowConfirmPassword}
                placeholder='Confirm password' />
            </View>
            <AuthButton onPress={handleSubmit}>Create account</AuthButton>
            <View mx='auto'>
              <Text color='#3A3A3A' mt='10' textAlign='center'>
                By registering an account, you agree to our
                <Text color='primary.600'> Terms of use</Text> and
                <Text color='primary.600'> Privacy Policy</Text>
              </Text>
            </View>
            <Text color='#3A3A3A' textAlign='center'>
              Already have an account?
              <Text color='primary.600'>Sign in</Text>
            </Text>
          </Box>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default SignUp;