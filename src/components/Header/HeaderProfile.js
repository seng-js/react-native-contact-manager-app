import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";
import {useSelector} from "react-redux";
import Colors from "../../utils/Colors";
import {iconFontMedium} from "../../utils/Styles";

const HeaderProfile = () => {
    const state = useSelector(state => state);
    const contacts = state.contacts;
    const listContact = contacts.filter((contact) => contact.isContact);
    const listFavorite = contacts.filter((contact) => contact.isFavorite);
    let countFavorite = listFavorite.length > 0 ? listFavorite.length : 0;
    let countContact =  listContact.length > 0 ? listContact.length : 0;
    let countPeople =  contacts.length > 0 ? contacts.length : 0;

    return (
        <ImageBackground source={require('../../../assets/images/menu-bg.jpeg')} style={{padding: 20}}>
            <Image source={require('../../../assets/images/img-default.jpg')} style={styles.image} />
            <Text style={styles.textProfile}>John Doe</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{countFavorite}</Text>
                    <MaterialIcons name="favorite-outline" size={iconFontMedium} style={styles.icon} />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{countContact}</Text>
                    <AntDesign name="contacts" size={iconFontMedium} style={styles.icon}  />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{countPeople}</Text>
                    <Ionicons name="people-outline" size={iconFontMedium} style={styles.icon}  />
                </View>
            </View>
        </ImageBackground>
    );
}

export default HeaderProfile;

const styles = StyleSheet.create({
    image: {
        height: 55,
        width: 55,
        borderRadius: 30,
        marginTop: 10
    },
    text: {
        color: Colors.white,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: "bold"
    },
    textProfile: {
        color: Colors.white,
        fontSize: 18
    },
    icon: {
        color: Colors.green
    }
});
