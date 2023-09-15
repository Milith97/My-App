import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="SplashPage" component={SplashPage} />
                <Stack.Screen options={{headerShown: false}}name="LoginPage" component={LoginPage} />
                <Stack.Screen options={{headerShown: false}} name="SignUpPage" component={SignUpPage} />
                <Stack.Screen options={{headerShown: false}} name="WelcomePage" component={WelcomePage} />
                <Stack.Screen options={{headerShown: false}} name="ProfilePage" component={ProfilePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

