import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfilePage() {
    return (
        <View style={styles.container}>

            <View style={styles.heder}>

            </View>

            <View style={styles.TextInput}>

            </View>

            <View style={styles.footer}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heder:{
        flex:1,
    },
    TextInput: {
        flex: 1,
    },
    footer: {
        flex: 2,
    }

})