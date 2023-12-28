import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Formik, Field} from 'formik';
import IconButton from '../components/IconButton';
import TextInputField from '../components/TextInputField';
import PrimaryButton from '../components/PrimaryButton';
import Divider from '../components/Divider';
import {signUpValidationSchema} from '../helpers/validations';
import AuthLayout from '../components/AuthLayout';

export default function SignupScreen({navigation}: any) {
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
          Sign Up
        </Text>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{email: '', password: '', confirmPassword: ''}}
          onSubmit={values => navigation.navigate('Login')}>
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
              <Field
                component={TextInputField}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Your Password"
              />
              <View style={{marginTop: 20, width: '100%'}}>
                <PrimaryButton onPress={handleSubmit} text="Sign up" />
              </View>
            </>
          )}
        </Formik>
        <Text
          style={styles.signuptext}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Already have an account? Sign in
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
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
