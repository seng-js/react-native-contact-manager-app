import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
    Switch,
    Button,
    Text,
} from "react-native";
import * as React from "react";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {grey, iconFontSmall, white} from "../utils/Styles";
import {useState} from "react";
import ImageRadio from "./ImageRadio";
import {useForm} from "react-hook-form";
import {useNavigation} from "@react-navigation/native";

const FormScreen = (props) => {
    const navigation = useNavigation();
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [isEnabledFavorite, setIsEnabledFavorite] = useState(false);
    const [isEnabledContact, setIsEnabledContact] = useState(false);
    const toggleSwitchFavorite = () => setIsEnabledFavorite(previousState => !previousState);
    const toggleSwitchContact = () => setIsEnabledContact(previousState => !previousState);
    return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{padding: 10}}>
                <ImageRadio />
                <View style={styles.formElement}>
                    <MaterialIcons name="drive-file-rename-outline" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Name" style={{width: '100%'}} />
                </View>
                <View style={styles.formElement}>
                    <MaterialCommunityIcons name="office-building-outline" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Company" style={{width: '100%'}} />
                </View>
                <View style={styles.formElement}>
                    <MaterialCommunityIcons name="medal-outline" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Position" style={{width: '100%'}} />
                </View>
                <View style={styles.formElement}>
                    <Ionicons name="location-outline" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="City" style={{width: '100%'}} />
                </View>
                <View style={styles.formElementCheckbox}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabledFavorite ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchFavorite}
                        value={isEnabledFavorite}
                    />
                    <Text style={{color: grey}}>Add to contact?</Text>
                </View>
                <View  style={styles.formElementCheckbox}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabledContact ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchContact}
                        value={isEnabledContact}
                    />
                    <Text style={{color: grey}}>Add to favorite?</Text>
                </View>
                <View style={styles.formElement}>
                    <AntDesign name="facebook-square" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Facebook" style={{width: '100%'}} />
                </View>
                <View style={styles.formElement}>
                    <AntDesign name="instagram" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Instagram" style={{width: '100%'}} />
                </View>
                <View style={styles.formElement}>
                    <AntDesign name="twitter" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Twitter" style={{width: '100%'}} />
                </View>
                <View style={styles.formElement}>
                    <AntDesign name="youtube" size={iconFontSmall} color={grey} />
                    <TextInput placeholder="Youtube" style={{width: '100%'}} />
                </View>
                <Button title="Save" />
                <Button title="Cancel" onPress={() => navigation.navigate('Home', {name: 'Home'})} />
        </ScrollView>
    </SafeAreaView>
    );
}

export default FormScreen;

const styles = StyleSheet.create({
    formElement: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginTop: 10
    },
    formElementCheckbox: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center'
    },
    imageRadio: {
        borderRadius: 20,
        width: 40,
        height: 40,
    }
});