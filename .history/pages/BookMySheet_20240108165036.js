import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, Pressable, ScrollView, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { Card, TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Ionicons';

const BookMySheet = ({ navigation }) => {
    const { colors } = useTheme();
    const [text, setText] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatPress = (seatNumber) => {
        // Handle seat press logic here (e.g., add or remove from selectedSeats array)
        const isSeatSelected = selectedSeats.includes(seatNumber);
        if (isSeatSelected) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const renderSeats = (seatCount) => {
        const seats = [];
        for (let i = 1; i <= seatCount; i++) {
            const isSeatSelected = selectedSeats.includes(i);
            seats.push(
                <TouchableOpacity
                    key={i}
                    style={[styles.seat, isSeatSelected && styles.selectedSeat]}
                    onPress={() => handleSeatPress(i)}
                >
                    <Text style={styles.seatText}>{i}</Text>
                </TouchableOpacity>
            );

            if (i % 5 === 0 && i !== seatCount) {
                seats.push(
                    <React.Fragment key={`row-${i}`}>
                        <Icon4 name="seat-passenger" size={30} color="#000" />
                        <Icon4 name="seat-passenger" size={30} color="#000" />
                        <Icon4 name="seat-passenger" size={30} color="#000" />
                    </React.Fragment>
                );
            }
        }
        return seats;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#C0B2B2' />
            <View style={styles.header}>
                
                <View
                    animation='bounceIn'
                    duraton='1500'
                    source={require('../assets/img/banner2.jpg')}
                    backgroundColor='#65A9E7'
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
           
            <View style={styles.headerText}>
                <View style={{}}>
                    <Text style={styles.text3}> Choose Your Bus </Text>
                </View>
                <Text style={styles.text2}>04th-Jan-2024 | Thursday</Text>
            </View>

            <ScrollView>
                <Animatable.View style={styles.midleContent} animation='bounceIn'>
                    <View style={styles.btnContainer}>
                        <ScrollView style={styles.seatScrollView}>
                            <ScrollView style={styles.scrollViewCard}>
                                <View style={styles.cardContent}>
                                    <View style={{ flex: 1, height: 100, gap: 5 }}>
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
                            </ScrollView>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={styles.box}></Text>
                                <Text style={{}}> Availble</Text>
                            </View>
                            {/* <View style={styles.seatRow}>
                                {[1, ].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View> */}

                            <View style={styles.seatRow}>

                                {/* 2 seats on the left */}
                                {[1, 2].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[3, 4, 5].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>


                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[6, 7].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[8, 9, 10].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>


                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[11, 12].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[13, 14, 15].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>


                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[16, 17].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* Spacer */}
                                <View style={styles.spacer}></View>

                                {/* 3 seats on the right */}
                                {[18, 19, 20].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>


                            <View style={styles.seatRow}>
                                {/* 2 seats on the left */}
                                {[21, 22, 23].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}

                                {/* 3 seats on the right */}
                                {[23, 24, 25,].map(seatNumber => (
                                    <TouchableOpacity
                                        key={seatNumber}
                                        style={[styles.seat, selectedSeats.includes(seatNumber) && styles.selectedSeat]}
                                        onPress={() => handleSeatPress(seatNumber)}
                                    >
                                        <Text style={styles.seatText}>{seatNumber}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                        </ScrollView>



                        {/* <ScrollView style={styles.scrollViewCard}>
                            <View style={styles.cardContent}>
                              
                              
                            </View>
                        </ScrollView> */}
                    </View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BookMySheet;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.48;

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
        position: 'relative',
        zIndex: 2,
        padding: 0,
    },
    midleContent: {
        flex: 1,
    },
    btnContainer: {
        padding: 20,
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderBottomRightRadius: 140,
        borderBottomLeftRadius: 140,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Inder',
        fontWeight: '800'
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: { height: 2, width: 2 },
        shadowOpacity: 6,
        shadowRadius: 6,
        elevation: 10,
        width: 110,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#219DE1',
    },
    text2: {
        fontSize: 20,
        marginTop: '5%',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        color: '#1b1b1b',
    },
    text3: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
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
        marginHorizontal: '5%',
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
    box: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
        margin: 5,
    },
    seatScrollView: {
        marginTop: 20,
    },

    seatRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10, // Adjust the margin as needed
    },

    seat: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
        margin: 5,
    },

    selectedSeat: {
        backgroundColor: '#65A9E7',
    },

    seatText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    spacer: {
        width: '15%', // Adjust the width to create space between the two groups of seats
    },
});
