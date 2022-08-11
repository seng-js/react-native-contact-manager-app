import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import {useNavigation} from "@react-navigation/native";
import {updateContactHandler} from "../../redux";
import {useDispatch} from "react-redux";
import {grey} from "../../utils/Styles";
import {getSelectedIndexCity, getSelectedIndexPosition, getSelectedIndexProfile} from "../../utils";

const ListAction = ({item}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {isContact, isFavorite, index} = item;
    const updateData = (type, action) => {
        updateContactHandler(type, action, index, dispatch);
    }
    const getEditItem = (item) => {
        const selectedProfile = {selectedIndexProfile: getSelectedIndexProfile(item.avatar)};
        const selectedPosition = {selectedIndexPosition: getSelectedIndexPosition(item.position)};
        const selectedCity = {selectedIndexCity: getSelectedIndexCity(item.city)};
        return {...item, ...selectedProfile, ...selectedPosition, ...selectedCity}
    }
    return (
        <View style={styles.container}>
            {isContact ? (
                <View style={styles.buttonDangerContainer}>
                    <TouchableOpacity onPress={() => updateData('contact', 'delete')}>
                        <Text style={styles.buttonDangerTextAction}>Delete from contacts</Text>
                    </TouchableOpacity>
                </View>
            ):(
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => updateData('contact', 'add')}>
                        <Text style={styles.buttonTextAction}>Add to contacts</Text>
                    </TouchableOpacity>
                </View>
            )}
            {isFavorite === false && isContact === false && (
                <View style={styles.buttonDisableContainer}>
                    <Text style={styles.buttonDisableTextAction}>Add to favorites</Text>
                </View>
            )}
            {isFavorite === false && isContact === true && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => updateData('favorite', 'add')}>
                        <Text style={styles.buttonTextAction}>Add to favorites</Text>
                    </TouchableOpacity>
                </View>
            )}
            {isFavorite === true && (
                <View style={styles.buttonDangerContainer}>
                    <TouchableOpacity onPress={() => updateData('favorite', 'delete')}>
                        <Text style={styles.buttonDangerTextAction}>Delete from favorites</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.buttonEditContainer}>
                <TouchableOpacity onPress={() => navigation.navigate({
                    name: 'Form',
                    params: getEditItem(item)
                })}>
                    <MaterialCommunityIcons style={styles.buttonEditAction} name="account-edit-outline" size={22} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ListAction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextAction: {
        fontSize: 10,
        color: Colors.darkBlue,
    },
    buttonDisableTextAction: {
        fontSize: 10,
        color: grey,
    },
    buttonDangerTextAction: {
        fontSize: 10,
        color: '#ff0000'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: Colors.darkBlue
    },
    buttonDisableContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: grey
    },
    buttonDangerContainer:{
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: '#ff0000'
    },
    buttonEditContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: Colors.darkBlue
    },
    buttonEditAction: {
        fontSize: 16,
        color: Colors.darkBlue,
    },
});