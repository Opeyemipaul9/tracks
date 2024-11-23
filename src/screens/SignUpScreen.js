import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/spacer';

const SignupScreen = () => {
  const navigation = useNavigation();
  const {state, signup} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 10}}>
        <Text h3> {'Sign Up for Tracker'} </Text>
      </View>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <View style={{height: 10}} />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : (
        <></>
      )}
      <View style={{marginVertical: 10}}>
        <Button
          title={'Go to Sign in '}
          onPress={() => signup({email, password})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SignupScreen;
