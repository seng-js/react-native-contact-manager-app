import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Colors from "../../utils/Colors";
import {iconFontMedium} from "../../utils/Styles";
import {IMAGE_URL} from "../../utils/Constants";
import {useGetCountList} from "../../hooks/useGetCountList";

const HeaderProfile = () => {
    const state = useSelector(state => state);
    const [countFavorite, countContact, countPeople] = useGetCountList();
    const [profile, setProfile] = useState(
        {
            avatar: 'img/img1.jpg',
            name: ''
        }
    );
    useEffect(() => {
        setProfile(state?.tempContacts[0]);
    }, [state?.tempContacts[0]])

    return (
        <ImageBackground source={require('../../../assets/images/menu-bg.jpeg')} style={{padding: 20}}>
            <Image source={{uri: IMAGE_URL + profile?.avatar.replace('img/', '')}} style={styles.image} />
            <Text style={styles.textProfile}>{profile?.name}</Text>
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
        fontSize: 18,
        padding: 5
    },
    icon: {
        color: Colors.green
    }
});
