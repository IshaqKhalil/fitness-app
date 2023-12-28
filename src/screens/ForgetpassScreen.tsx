import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Formik, Field} from 'formik';
import TextInputField from '../components/TextInputField';
import PrimaryButton from '../components/PrimaryButton';
import {forgetPassValidationSchema} from '../helpers/validations';
import AuthLayout from '../components/AuthLayout';

export default function ForgetpassScreen({navigation}: any) {
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
          Forget Password
        </Text>
        <Formik
          validationSchema={forgetPassValidationSchema}
          initialValues={{email: ''}}
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
              <View style={{marginTop: 20, width: '100%'}}>
                <PrimaryButton onPress={handleSubmit} text="Reset Password" />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View />
      <View />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
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
