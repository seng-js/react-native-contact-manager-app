import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";
import {iconFontSmall} from "../../utils/Styles";
import {useSelector} from "react-redux";
import Colors from "../../utils/Colors";

const HeaderProfile = () => {
    const state = useSelector(state => state);
    const contacts = state.contacts;
    const listContact = contacts.filter((contact) => contact.isContact);
    const listFavorite = contacts.filter((contact) => contact.isFavorite);
    let countFavorite = listFavorite.length > 0 ? listFavorite.length : 0;
    let countContact =  listContact.length > 0 ? listContact.length : 0;

    return (
        <ImageBackground source={require('../../../assets/images/menu-bg.jpeg')} style={{padding: 20}}>
            <Image source={require('../../../assets/images/img0.jpg')} style={styles.image} />
            <Text style={{color: '#fff', fontSize: 18}}>John Doe</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', paddingRight: 5}}>{countFavorite}</Text>
                    <MaterialIcons name="favorite" size={iconFontSmall} color={Colors.red} />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', paddingRight: 5, marginLeft: 5}}>{countContact}</Text>
                    <AntDesign name="contacts" size={iconFontSmall} color="#fff" />
                </View>
            </View>
        </ImageBackground>
    );
}

export default HeaderProfile;

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    }
});
