import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashPage" component={SplashPage} />
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} />
                <Stack.Screen name="WelcomePage" component={WelcomePage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

