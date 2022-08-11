import {Text, TextInput} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';

const LoginScreen = () => {
  return (
    <>
      <Background />
      <WhiteLogo />
      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.label}>Email</Text>
      <TextInput
        placeholder="Ingrese su email"
        placeholderTextColor="#rgba(255,255,255,0.4)"
        keyboardType="email-address"
      />
    </>
  );
};

export default LoginScreen;
