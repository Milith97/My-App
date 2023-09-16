import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfilePage({ navigation }) {
    return (
        <View style={styles.container}>

            {/*  ----------------------------HederTopic------------------------------------ */}
            <View style={styles.heder}>
                <Text style={styles.Text1}>My App</Text>
            </View>

            {/* ------------------------------TextInput------------------------------- */}
            <View style={styles.TextInput}>
                <TextInput
                    placeholder="Email"

                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ffffff"
                    style={styles.Text2}

                />
            </View>

            {/*  ------------------------------footer---------------------------------- */}

            <View style={styles.footer}>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SignUpPage') }}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
    },
    heder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    TextInput: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Text1: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Inter'

    },
    Text2: {
        backgroundColor: '#3D3D3D',
        height: 64,
        width: 343,
        fontSize: 12,
        borderRadius: 16,
        paddingLeft: 10,
        margin: 10,
        fontFamily: 'Inter',

    },
    footer: {
        flex: 2,

        alignItems: 'center',
    },
    button: {
        width: 320,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFD482',
        margin: 10,
        marginTop: '50%'

    },
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
        color: "#000",
        fontFamily: 'Inter'
    }

})