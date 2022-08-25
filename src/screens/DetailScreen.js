import * as React from "react";
import {useEffect} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Colors from "../utils/Colors";
import {getAvatarProfileURL} from "../utils";
import SocialList from "../components/List/SocialList";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import moment from "moment/moment";
import {iconFontMedium} from "../utils/Styles";

const colorEmphasis = {
    high: 0.87,
    medium: 0.6,
    disabled: 0.38,
};

const darkColors = {
    background: 'white',
    primary: '#BB86FC',
    primary2: '#3700b3',
    secondary: '#03DAC6',
    onBackground: 'black',
    error: '#CF6679',
};

const DetailScreen = ({route, navigation}) => {

    useEffect(() => {
    }, [route?.params]);
     return (
        <>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: getAvatarProfileURL(route?.params.avatar)}}/>
                <Text style={styles.name}>{route?.params.name}</Text>
                <View style={{marginTop: 10}}>
                    <SocialList item={route?.params} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="office-building-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                    <Text style={styles.text}>
                        {route?.params.company}
                    </Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="medal-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                    <Text style={styles.text}>
                        {route?.params.position}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="location-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                    <Text style={styles.text}>
                        {route?.params.city}
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="update" size={22} color={Colors.darkerBlue} />
                    <Text style={styles.text}>
                        {moment(route?.params.createdDate).calendar()}
                    </Text>
                </View>
            </View>
        </>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'column',
        marginBottom: 2,
        padding: 30,
        backgroundColor: Colors.white,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 2,
        padding: 30,
        backgroundColor: Colors.white
    },
    button: {
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'column',
        borderWidth: 2,
        borderRadius: 20,
        padding: 6,
        marginTop: 10,
        borderColor: Colors.darkBlue,
        alignItems: 'center'
    },
    buttonTextAction: {
        fontSize: 14,
        color: Colors.darkBlue,
        textTransform: "uppercase"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: darkColors.onBackground,
        opacity: colorEmphasis.high,
        alignSelf: 'center',
        shadowColor: darkColors.secondary,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: colorEmphasis.high,
    },
    name: {
        fontSize: 16,
        color: Colors.darkBlue,
        fontWeight: '600',
    },
    text: {
        fontSize: 14,
        color: darkColors.onBackground,
        opacity: colorEmphasis.medium,
        paddingLeft: 10
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5
    }
});
