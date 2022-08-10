import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {black, iconFontSmall} from "../utils/Styles";
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
                        params: {
                            avata: '',
                            name: '',
                            company: '',
                            isFavorite: false,
                            isContact: false,
                            position: '',
                            city: '',
                            social_networks: {
                                facebook:'',
                                instagram:'',
                                twitter:'',
                                youtube:''
                            }
                        }
                    });
                }}
                style={styles.btnClickContain}
                underlayColor='#042417'>
                <View
                    style={styles.btnContainer}>
                    <AntDesign name="adduser" size={iconFontSmall} color={black} />
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
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/img7.jpg')} />
            </View>
        </View>
    );
}

export default HeaderRightScreen;

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
    }
});