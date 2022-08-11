import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Radio({ value, changeValue, leftImage }) {
    return <TouchableOpacity
        style={styles.button}
        onPress={changeValue}
    >
        <Image source={leftImage} style={styles.leftImg} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c36e02',
        borderRadius: 15,
        padding: 15
    },
    leftImg: { height: 40,
        width: 40,
        marginRight: 30,
        tintColor: 'white',
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 30,
        color: 'white'
    },
    tick: {
        position: 'absolute',
        right: 0,
        height: 30,
        width: 30,
        marginRight: 30,
        tintColor: 'white'
    }
});