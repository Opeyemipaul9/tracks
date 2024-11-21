import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const SignupScreen = () => {
  const navigation = useNavigation();
  const {loggedIn, login, logout} = useContext(AuthContext);

  return (
    <>
      <Text style={{fontSize: 48}}> SignupScreen</Text>
      <Button
        title="Go to Sign in "
        onPress={() => navigation.navigate('Signin')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
