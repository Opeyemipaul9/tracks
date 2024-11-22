import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const SigninScreen = () => {
  const {loggedIn, login, logout} = useContext(AuthContext);

  return (
    <View>
      <Text style={{fontSize: 30}}> Sign In</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
