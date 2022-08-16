import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import {useNavigation} from "@react-navigation/native";
import {deleteDataHandler, updateContactHandler} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {grey, iconFontMedium} from "../../utils/Styles";
import {prepareToEdit} from "../../utils";

const ListAction = ({item}) => {
    const state = useSelector(state => state);
    const enableDelete = state.enableDelete;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {isContact, isFavorite, index} = item;
    const updateData = (type, action) => {
        updateContactHandler(type, action, index, dispatch);
    }
    const getEditItem = (item) => {
        return prepareToEdit(item);
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
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.buttonEditContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate({
                        name: 'Form',
                        params: getEditItem(item)
                    })}>
                        <MaterialCommunityIcons style={styles.buttonEditAction} name="account-edit-outline" size={iconFontMedium} />
                    </TouchableOpacity>
                </View>
                {enableDelete && (
                    <View style={styles.buttonDeleteContainer}>
                        <TouchableOpacity onPress={() => deleteDataHandler(item.index, dispatch)}>
                            <AntDesign style={styles.buttonDeleteAction} name="deleteuser" size={iconFontMedium} />
                        </TouchableOpacity>
                    </View>
                )}
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
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
        marginTop: 5,
        borderColor: Colors.darkBlue,
        marginLeft: 5
    },
    buttonDeleteContainer: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
        marginTop: 5,
        borderColor: Colors.red,
        marginLeft: 5
    },
    buttonEditAction: {
        fontSize: 16,
        color: Colors.darkBlue,
    },
    buttonDeleteAction: {
        fontSize: 16,
        color: Colors.red,
    },
});