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
      <Spacer>
        <Text h3> Sign Up for Tracker </Text>
      </Spacer>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button
          title="Go to Sign in "
          onPress={() => signup({email, password})}
        />
        {/* <Button title="Go to Main Screen" onPress={login} /> */}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SignupScreen;
