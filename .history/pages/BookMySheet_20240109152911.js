import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image,Text, StatusBar, Pressable, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';

const BookMySheet = ({ navigation }) => {
    const { colors } = useTheme();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatPress = (seatNumber) => {
        const isSeatSelected = selectedSeats.includes(seatNumber);
        if (isSeatSelected) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#59DDD2' />
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    duraton='1500'
                    source={require('../assets/img/seatBookBg.jpg')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>

            <Pressable style={{ margin: 5 }} onPress={() => { navigation.navigate('BusShedule') }}>
                <Icon2 name="arrow-back-circle" size={50} color="#fff" />
            </Pressable>

            <View style={styles.headerText}>
                <View>
                    <Text style={styles.text3}> Choose Your Bus </Text>
                </View>
                <Text style={styles.text2}>04th-Jan-2024 | Thursday</Text>
            </View>

            <ScrollView>
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <View style={styles.cardContent}>
                            <View style={{ height: 100, gap: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>11:30 to 01:30</Text>
                                <Text style={{ fontSize: 18, marginTop: 5, color: '#BF4925', fontWeight: '700' }}>Yellow Star</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon3 name="airline-seat-recline-extra" size={30} color="#000" />
                                    <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>45 Seats</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon5 name="snow-outline" size={25} color="#219DE1" />
                                    </View>
                                </View>
                            </View>
                            {/* Right Content */}
                            <View style={{ flex: 1, alignItems: 'flex-end', gap: 5 }}>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Rs 1250/-</Text>
                                <Text style={{ fontSize: 20, color: 'black' }}>2.5hr   </Text>
                            </View>
                        </View>

                        <Card style={{ flex: 1, marginTop: '10%', padding: '10%' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 19 }}>
                                <Text style={styles.box1}></Text>
                                <Text style={{}}> AVAILABLE</Text>

                                <Text style={styles.box2}></Text>
                                <Text style={{}}> BOOKED</Text>
                            </View>
                            <View style={styles.seatRow}>
                                {[1, 2, 3, 4, 5].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            {/* ... (similar patterns for other seatRows) */}
                        </Card>
                    </View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookMySheet;

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        alignItems: 'center',
    },
    midleContent: {
        flex: 1,
    },
    btnContainer: {
        padding: '8%'
    },
    logo: {
        width: height * 0.48,
        height: height * 0.48,
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    text2: {
        fontSize: 20,
        marginTop: '5%',
        fontWeight: 'bold',
        color: '#1b1b1b',
    },
    text3: {
        fontSize: 20,
        fontWeight: '500',
        color: '#1c1c1c',
    },
    scrollViewCard: {
        flex: 1,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '0%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderBlockColor: '#000',
        borderWidth: 0.5,
    },
    box1: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
    },
   
})