import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const SigninScreen = () => {
  const {loggedIn, login, logout} = useContext(AuthContext);

  return (
    <View>
      <Button title="Go to Main Screen" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
