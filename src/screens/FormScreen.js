import {Button, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {grey, iconFontMedium} from "../utils/Styles";
import Input from '../components/Form/Input';
import Colors from "../utils/Colors";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {
    AVATAR_DEFAULT_PROFILE,
    AVATAR_URL_PROFILE,
    defaultContact,
    IMAGE_URL,
    listAvatar,
    listCity,
    listPosition
} from "../utils/Constants";
import {saveContactHandler} from "../redux";
import {useDispatch} from "react-redux";
import Select from "../components/Form/Select";

const FormScreen = ({route, navigation}) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState(defaultContact);
    const [errors, setErrors] = useState({});

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        const validateData = [
            {errorLabel: 'Avatar is required field!', field: 'avatar'},
            {errorLabel: 'Name is required field!', field: 'name'},
            {errorLabel: 'Company is required field!', field: 'company'},
            {errorLabel: 'Position is required field!', field: 'position'},
            {errorLabel: 'City is required field!', field: 'city'},
        ]

        validateData.forEach((element) => {
            if (!inputs[element.field]) {
                handleError(element.errorLabel, element.field);
                isValid = false;
            }
        });

        if (isValid) {
            submitHandle();
        }
    };

    const submitHandle = () => {
        saveContactHandler(inputs, dispatch);
        navigation.navigate('People');
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));

    };

    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    useEffect(() => {
        setInputs(route?.params);
    }, [route?.params]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{padding: 10}}>
                <View style={styles.selectContainer}>
                    <Select
                        name="Avatar"
                        errors={errors.avatar}
                        data={listAvatar}
                        defaultValueByIndex={inputs?.selectedIndexProfile}
                        onSelect={(selectedItem) => {
                            setInputs({...inputs, avatar: 'img/' + selectedItem.image});
                        }}
                        renderCustomizedButtonChild={(selectedItem) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <Image source={{uri: AVATAR_URL_PROFILE + selectedItem.image}} style={styles.dropdownButtonImage} />
                                        ) : (
                                            <Image source={{uri: AVATAR_URL_PROFILE + AVATAR_DEFAULT_PROFILE}} style={styles.dropdownButtonImage}  />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select Avatar'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={iconFontMedium} />
                                </View>
                            );
                        }}
                        renderCustomizedRowChild={(item) => {
                            return (
                                <View style={styles.dropdown3RowChildStyle}>
                                    <Image source={{uri: AVATAR_URL_PROFILE + item.image}} style={styles.dropdownRowImage} borderRadius={20} />
                                    <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'name')}
                        onFocus={() => handleError(null, 'name')}
                        iconName="account-outline"
                        label="Name"
                        placeholder="Name"
                        value={inputs?.name}
                        error={errors.name}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'company')}
                        onFocus={() => handleError(null, 'company')}
                        iconName="office-building-outline"
                        label="Company"
                        placeholder="Company"
                        value={inputs?.company}
                        error={errors.company}
                    />
                    <Select
                        name="Position"
                        errors={errors.position}
                        data={listPosition}
                        defaultValueByIndex={inputs?.selectedIndexPosition}
                        onSelect={(selectedItem) => {
                            setInputs({...inputs, position: selectedItem.title})
                        }}
                        renderCustomizedButtonChild={(selectedItem) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <MaterialCommunityIcons name="medal-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                                        ) : (
                                            <MaterialCommunityIcons name="medal-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select position'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={iconFontMedium} />
                                </View>
                            );
                        }}
                        renderCustomizedRowChild={(item) => {
                            return (
                                <View style={styles.dropdown3RowChildStyle}>
                                    <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                        search
                        error={errors.position}
                    />
                    <Select
                        name="City"
                        errors={errors.city}
                        data={listCity}
                        defaultValueByIndex={inputs?.selectedIndexCity}
                        onSelect={(selectedItem) => {
                            setInputs({...inputs, city: selectedItem.title})
                        }}
                        renderCustomizedButtonChild={(selectedItem) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <Image source={{uri:IMAGE_URL + selectedItem.image}} style={styles.dropdownButtonImage} />
                                        ) : (
                                            <Ionicons name="location-outline" style={styles.selectIcon} color={Colors.darkerBlue} size={iconFontMedium} />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select city'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={iconFontMedium} />
                                </View>
                            );
                        }}
                        renderCustomizedRowChild={(item) => {
                            return (
                                <View style={styles.dropdown3RowChildStyle}>
                                    <Image source={{uri: IMAGE_URL + item.image}} style={styles.dropdownRowImage} borderRadius={20} />
                                    <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                        search
                        error={errors.city}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'facebook')}
                        onFocus={() => handleError(null, 'facebook')}
                        iconName="facebook"
                        label="Facebook"
                        placeholder="Facebook"
                        value={inputs?.social_networks?.facebook}
                        error={errors.facebook}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'instagram')}
                        onFocus={() => handleError(null, 'instagram')}
                        iconName="instagram"
                        label="Instagram"
                        placeholder="Instagram"
                        value={inputs?.social_networks?.instagram}
                        error={errors.instagram}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'twitter')}
                        onFocus={() => handleError(null, 'twitter')}
                        iconName="twitter"
                        label="Twitter"
                        placeholder="Twitter"
                        value={inputs?.social_networks?.twitter}
                        error={errors.twitter}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'youtube')}
                        onFocus={() => handleError(null, 'youtube')}
                        iconName="youtube"
                        label="Youtube"
                        placeholder="Youtube"
                        value={inputs?.social_networks?.youtube}
                        error={errors.youtube}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} title={inputs?.actionLabel} onPress={validate} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default FormScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10
    },
    button: {
        color: 'red',
        backgroundColor: 'red',
        borderRadius: 20
    },
    selectContainer: {
        marginTop: 10
    },
    dropdownButtonChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 20
    },
    dropdownButtonImage: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        borderRadius: 20,
        marginLeft: -10
    },
    dropdownButtonTxt: {
        color: grey,
        textAlign: 'left',
        fontSize: 14,
        marginHorizontal: 12,
        paddingTop: 5
    },
    dropdown3RowChildStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18,
    },
    dropdownRowImage: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
    },
    dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginHorizontal: 12,
    },
    wrapperSelect: {
        flex: 1,
        flexDirection: 'row'
    },
    selectIcon: {
        marginLeft: -10
    }
});