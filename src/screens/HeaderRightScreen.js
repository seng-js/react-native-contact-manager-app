import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {grey, iconFontSmall} from "../utils/Styles";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const HeaderRightScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate({
                        name: 'Form',
                    });
                }}
                style={styles.btnClickContain}
                underlayColor='#042417'>
                <View
                    style={styles.btnContainer}>
                    <AntDesign name="adduser" size={iconFontSmall} color={grey} />
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
                    <Feather name="search" size={iconFontSmall} style={{marginRight: 5}} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default HeaderRightScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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
    }
});