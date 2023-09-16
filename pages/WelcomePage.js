import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function ({ navigation }) {
    return (
        <View style={styles.container}>

            {/*  ----------------------------ProfileLOGO------------------------------------ */}

            <View style={styles.logo}>
                <TouchableOpacity style={styles.roundButton} onPress={() => { navigation.navigate('ProfilePage') }}>
                    <Icon name="settings-outline" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

            {/*  ----------------------------VoiceInput------------------------------------ */}

            <View style={styles.heder}>

                <Text style={styles.Text1}>Characters list goes here</Text>
                <Text style={styles.Text1}>You are free to come up</Text>
                <Text style={styles.Text1}>with a design </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
    },
    logo: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: '10%',
        marginTop: '5%'
    },
    heder: {
        flex: 2,
        marginTop: '30%',
        alignItems: 'center',

    },
    Text1: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter'

    },

})