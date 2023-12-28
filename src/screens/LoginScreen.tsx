import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Formik, Field} from 'formik';
import IconButton from '../components/IconButton';
import TextInputField from '../components/TextInputField';
import PrimaryButton from '../components/PrimaryButton';
import Divider from '../components/Divider';
import {signInValidationSchema} from '../helpers/validations';
import AuthLayout from '../components/AuthLayout';

export default function LoginScreen({navigation}: any) {
  return (
    <AuthLayout>
      <View style={styles.form}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 40,
            fontFamily: 'Outfit-Regular',
            fontWeight: '600',
            color: '#000',
            marginBottom: 20,
          }}>
          Sign In
        </Text>
        <Formik
          validationSchema={signInValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => navigation.navigate('Home')}>
          {({handleSubmit, isValid}) => (
            <>
              <Field
                component={TextInputField}
                name="email"
                label="Email"
                type="email"
                placeholder="Your Email"
              />
              <Field
                component={TextInputField}
                name="password"
                label="Password"
                type="password"
                placeholder="Your Password"
              />
              <Text
                style={{
                  alignSelf: 'flex-end',
                  marginVertical: 20,
                  color: '#000',
                  fontFamily: 'Outfit-Regular',
                }}
                onPress={() => {
                  navigation.navigate('ForgetPass');
                }}>
                Forgot Password?
              </Text>
              <PrimaryButton onPress={handleSubmit} text="Sign in" />
            </>
          )}
        </Formik>
        <Text
          style={styles.signuptext}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          Don't have an account? Sign up
        </Text>
      </View>
      <View style={styles.button}>
        <Divider />
        <IconButton text="Continue With Google" />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  view: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '70%',
  },
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  button: {
    marginBottom: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signuptext: {
    fontSize: 17,
    color: '#000',
    marginTop: 20,
    fontFamily: 'Outfit-Regular',
  },
});
