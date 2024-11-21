import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const TracklistScreen = () => {
  const navigation = useNavigation();
  const {loggedIn, login, logout} = useContext(AuthContext);
  return (
    <>
      <Text style={{fontSize: 48}}> TracklistScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetailScreen')}
      />
      <Button title="LogOut" onPress={logout} />
    </>
  );
};

const styles = StyleSheet.create({});

export default TracklistScreen;
