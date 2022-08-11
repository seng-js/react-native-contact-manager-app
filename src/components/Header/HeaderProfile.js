import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";
import {iconFontSmall} from "../../utils/Styles";

const HeaderProfile = () => {
    return (
        <ImageBackground source={require('../../../assets/images/menu-bg.jpeg')} style={{padding: 20}}>
            <Image source={require('../../../assets/images/img0.jpg')} style={styles.image} />
            <Text style={{color: '#fff', fontSize: 18}}>John Doe</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', paddingRight: 5}}>5</Text>
                    <MaterialIcons name="favorite" size={iconFontSmall} color="#fff" />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', paddingRight: 5, marginLeft: 5}}>5</Text>
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
