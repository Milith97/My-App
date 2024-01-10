import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ForgotPassword from './pages/ForgotPassword';
import VerificationCode from './pages/VerificationCode';
import NewPassword from './pages/NewPassword';
import FindBus from './pages/FindBus';
import HomePage2 from './pages/HomePage2';
import DrawerNav from './Common/component/DrawerNav';
import BookMySheet from './pages/BookMySheet';

const Stack = createStackNavigator();

const App = () => {
    const [isAppReady, setIsAppReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAppReady(true);
        }, 1300); /* Adjust the delay as needed */
    }, []);

    return (
            <NavigationContainer>
                <Stack.Navigator>
                    {isAppReady ? (
                        <>
                            <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
                            <Stack.Screen options={{ headerShown: false }} name="SignUpPage" component={SignUpPage} />
                            <Stack.Screen options={{ headerShown: false }} name="WelcomePage" component={HomePage} />
                            <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
                            <Stack.Screen options={{ headerShown: false }} name="VerificationCode" component={VerificationCode} />
                            <Stack.Screen options={{ headerShown: false }} name="NewPassword" component={NewPassword} />
                            <Stack.Screen options={{ headerShown: false }} name="FindBus" component={FindBus} />
                            <Stack.Screen options={{ headerShown: false }} name="HomePage2" component={HomePage2} />
                            <Stack.Screen options={{ headerShown: false }} name="DrawerNav" component={DrawerNav} />
                            <Stack.Screen options={{ headerShown: false }} name="BookMySheet" component={BookMySheet} />
                        </>
                    ) : (
                        <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashPage} />
                    )}


                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default App;
