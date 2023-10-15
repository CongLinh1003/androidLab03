
import { StyleSheet, Text, View, Image, Pressable, Touchable } from 'react-native';
import React from 'react';
export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/vs_red.png')} style={{ width: '265px', height: '324px', objectFit: 'contain' }} />
            <Text style={{ fontWeight: 700, fontSize: '1rem' }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

            <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', gap: 10 }}>
                <View style={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'row' }}>
                    <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Image source={require('./assets/Star 2.png')} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </View>
                <Text style={{ fontWeight: 500, fontSize: '0.8rem' }} >(Xem 828 đánh giá)</Text>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', }}>
                <Text style={{ fontWeight: 700, fontSize: '1.2rem' }} >1.790.000đ</Text>
                <Text style={{ fontWeight: 500, fontSize: '1rem', textDecoration: 'line-through' }} >1.790.000đ</Text>
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', }}>
                <Text style={{ fontWeight: 700, color: 'red', fontSize: '1rem' }} >Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image source={require('./assets/Group 1.png')} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: '90%', }} >
                <Pressable style={styles.btnn}>
                    <Text style={{ fontWeight: 600, fontSize: '1rem', textAlign: 'center' }}>4 - Màu / Chọn Màu             &gt; </Text>

                </Pressable>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', width: '90%', }} >
                <Pressable style={{ backgroundColor: 'red', width: '100%', borderRadius: 5, }}>
                    <Text style={{ fontWeight: 700, fontSize: '2rem', textAlign: 'center', color: 'white' }}>CHỌN MUA</Text>

                </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        gap: 10,
        padding: '1rem',
    },
    imgsss: {
        height: '270px'

    },
    btnn: {
        justifyContent: 'center',
        border: '5px solid gray ',
        width: '100%',
        padding: 10,
        borderRadius: 5,

    },
    spn: {
        fontWeight: 600, fontSize: '2rem'
    }

});
