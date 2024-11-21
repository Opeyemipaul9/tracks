import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from './src/context/AuthContext';

const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const TrackInfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
      <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const Bottomtab = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name={'TrackInfo'} component={TrackInfoStack} />
      <TabStack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
      <TabStack.Screen name="AccountScreen" component={AccountScreen} />
    </TabStack.Navigator>
  );
};

const App = () => {
  const [loggedIn, setloggedIn] = useState(true);

  const login = () => setloggedIn(true);
  const logout = () => setloggedIn(false);

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{loggedIn, login, logout}}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              {loggedIn ? (
                <Stack.Screen name="Bottomtab" component={Bottomtab} />
              ) : (
                <Stack.Group>
                  <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{
                      title: 'Sign Up',
                    }}
                  />
                  <Stack.Screen
                    name="Signin"
                    component={SigninScreen}
                    options={{
                      title: 'Sign in',
                    }}
                  />
                </Stack.Group>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
