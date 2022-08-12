import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import {iconFontSmall} from "../../utils/Styles";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {defaultContact} from "../../utils/Constants";
import Colors from "../../utils/Colors";

const HeaderRight = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.btnClickContain}
                underlayColor='#042417'>
                <View
                    style={styles.btnContainer}>
                    <Ionicons name="notifications-outline" size={iconFontSmall} color={Colors.darkerBlue} color={Colors.darkerBlue} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate({
                        name: 'Form',
                        params: defaultContact
                    });
                }}
                style={styles.btnClickContain}
                underlayColor='#042417'>
                <View
                    style={styles.btnContainer}>
                    <AntDesign name="adduser" size={iconFontSmall} color={Colors.darkerBlue} color={Colors.darkerBlue} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate({
                        name: 'Search'
                    });
                }}
                style={styles.btnClickContain}
                underlayColor='#042417'>
                <View
                    style={styles.btnContainer}>
                    <Feather name="search" size={iconFontSmall} style={{marginRight: 5}}  color={Colors.darkerBlue} />
                </View>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/images/img0.jpg')} />
            </View>
        </View>
    );
}

export default HeaderRight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginRight: 5
    },
    searchContainer: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginTop: 0
    },
    item: {
        backgroundColor: "#f5f520",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    btnClickContain: {
    },
    btnContainer: {
        marginRight: 10
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    },
    imageContainer: {
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginTop: -2,
        borderWidth: 1,
        borderColor: Colors.darkBlue
    }
});