import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextInputField = (props: any) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{inputProps.label}:</Text>
      <TextInput
        style={[styles.input, hasError && styles.errorInput]}
        secureTextEntry={inputProps.type == 'password' ? true : false}
        placeholder={inputProps.placeholder}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        placeholderTextColor="#B8B8B8"
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 17,
    color: '#000',
    fontFamily: 'Outfit-Regular',
    marginTop: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eaeaea',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    color: '#000',
  },
  errorInput: {
    borderColor: 'red',
    color: 'red',
  },
  errorText: {
    textTransform: 'capitalize',
    alignSelf: 'flex-start',
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
});
