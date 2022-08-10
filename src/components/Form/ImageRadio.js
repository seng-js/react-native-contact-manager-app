import {Alert, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import * as React from "react";

const ImageRadio = ({...props}) => {
    const listAvata = [
        {avata: require('../../../assets/images/img0.jpg')},
        {avata: require('../../../assets/images/img1.jpg')},
        {avata: require('../../../assets/images/img2.jpg')},
        {avata: require('../../../assets/images/img3.jpg')},
        {avata: require('../../../assets/images/img4.jpg')},
        {avata: require('../../../assets/images/img6.jpg')},
        {avata: require('../../../assets/images/img7.jpg')},
    ];

    const renderListAvata = listAvata.map(({avata}, key) => {
        return (
            <>
                <TouchableHighlight style={{borderColor: 'red'}}>
                    <View style={{borderColor: 'red'}}>
                        <Image key={key} source={avata} style={styles.imageRadio} />
                    </View>
                </TouchableHighlight>
            </>
        )
    });

    return (
        <View style={styles.imageRadioContainer}>
            {renderListAvata}
        </View>
    );
}

export default ImageRadio;

const styles = StyleSheet.create({
    imageRadioContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageRadio: {
        borderRadius: 20,
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'red'

    }
});