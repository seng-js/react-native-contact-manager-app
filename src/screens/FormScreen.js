import {Button, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {grey} from "../utils/Styles";
import Input from '../components/Form/Input';
import Colors from "../utils/Colors";
import SelectDropdown from 'react-native-select-dropdown';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {
    AVATA_DEFAULT_PROFILE,
    AVATA_URL_PROFILE,
    defaultContact,
    IMAGE_URL,
    listAvata,
    listCity,
    listPosition
} from "../utils/constants";
import {saveContactHandler} from "../redux";
import {useDispatch} from "react-redux";

const FormScreen = ({route, navigation}) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState(defaultContact);
    const [errors, setErrors] = useState({});

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.avatar) {
            handleError('Avata is required field!', 'avatar');
            isValid = false;
        }

        if (!inputs.name) {
            handleError('Name is required field!', 'name');
            isValid = false;
        }

        if (!inputs.company) {
            handleError('Company is required field!', 'company');
            isValid = false;
        }

        if (!inputs.position) {
            handleError('Position is required field!', 'position');
            isValid = false;
        }

        if (!inputs.city) {
            handleError('City is required field!', 'city');
            isValid = false;
        }

        if (isValid) {
            submitHandle();
        }
    };

    const submitHandle = () => {
        delete inputs['selectedIndexProfile'];
        delete inputs['selectedIndexPosition'];
        delete inputs['selectedIndexCity'];
        delete inputs['setActionLabel'];
        console.log(inputs);
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
                <View style={{marginVertical: 20}}>
                    <SelectDropdown
                        data={listAvata}
                        defaultValueByIndex={inputs?.selectedIndexProfile}
                        onSelect={(selectedItem, index) => {
                            setInputs({...inputs, avatar: 'img/' + selectedItem.image});
                        }}
                        buttonStyle={styles.dropdownButtonStyle}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={styles.dropdownButtonChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <Image source={{uri: AVATA_URL_PROFILE + selectedItem.image}} style={styles.dropdownButtonImage} />
                                        ) : (
                                            <Image source={{uri: AVATA_URL_PROFILE + AVATA_DEFAULT_PROFILE}} style={styles.dropdownButtonImage}  />
                                        )}
                                        <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select avata'}</Text>
                                    </View>
                                    <Ionicons name="chevron-down" color={Colors.darkerBlue} size={22} />
                                </View>
                            );
                        }}
                        dropdownStyle={styles.dropdown3DropdownStyle}
                        rowStyle={styles.dropdown3RowStyle}
                        selectedRowStyle={styles.dropdownSelectedRowStyle}
                        renderCustomizedRowChild={(item, index) => {
                            return (
                                <View style={styles.dropdown3RowChildStyle}>
                                    <Image source={{uri: AVATA_URL_PROFILE + item.image}} style={styles.dropdownRowImage} borderRadius={20} />
                                    <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                        searchInputStyle={styles.dropdownSearchInputStyleStyle}
                        searchPlaceHolder={'Search here'}
                        searchPlaceHolderColor={'#F8F8F8'}
                        renderSearchInputLeftIcon={() => {
                            return <Ionicons name={'search'} color={Colors.darkerBlue} size={22} />;
                        }}
                    />
                    {errors.avatar && (
                        <Text style={styles.errorMessage}>
                            {errors.avatar}
                        </Text>
                    )}
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
                    <View style={styles.selectContainer}>
                        <SelectDropdown
                            data={listPosition}
                            defaultValueByIndex={inputs?.selectedIndexPosition}
                            onSelect={(selectedItem, index) => {
                                setInputs({...inputs, position: selectedItem.title})
                            }}
                            buttonStyle={styles.dropdownButtonStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdownButtonChildStyle}>
                                        <View style={styles.wrapperSelect}>
                                            {selectedItem ? (
                                                <MaterialCommunityIcons name="medal-outline" style={{marginLeft: -10}} color={Colors.darkerBlue} size={22} />
                                            ) : (
                                                <MaterialCommunityIcons name="medal-outline" color={Colors.darkerBlue} size={22} />
                                            )}
                                            <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select position'}</Text>
                                        </View>
                                        <Ionicons name="chevron-down" color={Colors.darkerBlue} size={22} />
                                    </View>
                                );
                            }}
                            dropdownStyle={styles.dropdown3DropdownStyle}
                            rowStyle={styles.dropdown3RowStyle}
                            selectedRowStyle={styles.dropdownSelectedRowStyle}
                            renderCustomizedRowChild={(item, index) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>
                                        <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                    </View>
                                );
                            }}
                            search
                            searchInputStyle={styles.dropdownSearchInputStyleStyle}
                            searchPlaceHolder={'Search here'}
                            searchPlaceHolderColor={'#F8F8F8'}
                            renderSearchInputLeftIcon={() => {
                                return <Ionicons name={'search'} color={'#FFF'} size={22} />;
                            }}
                        />
                    </View>
                    {errors.position && (
                        <Text style={styles.errorMessage}>
                            {errors.position}
                        </Text>
                    )}
                    <View style={styles.selectContainer}>
                        <SelectDropdown
                            data={listCity}
                            defaultValueByIndex={inputs?.selectedIndexCity}
                            onSelect={(selectedItem, index) => {
                                setInputs({...inputs, city: selectedItem.title})
                            }}
                            buttonStyle={styles.dropdownButtonStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdownButtonChildStyle}>
                                        <View style={styles.wrapperSelect}>
                                            {selectedItem ? (
                                                <Image source={{uri:IMAGE_URL + selectedItem.image}} style={styles.dropdownButtonImage} />
                                            ) : (
                                                <Ionicons name="location-outline" color={Colors.darkerBlue} size={22} />
                                            )}
                                            <Text style={styles.dropdownButtonTxt}>{selectedItem ? selectedItem.title : 'Select city'}</Text>
                                        </View>
                                        <Ionicons name="chevron-down" color={Colors.darkerBlue} size={22} />
                                    </View>
                                );
                            }}
                            dropdownStyle={styles.dropdown3DropdownStyle}
                            rowStyle={styles.dropdown3RowStyle}
                            selectedRowStyle={styles.dropdownSelectedRowStyle}
                            renderCustomizedRowChild={(item, index) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>
                                        <Image source={{uri: IMAGE_URL + item.image}} style={styles.dropdownRowImage} borderRadius={20} />
                                        <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                    </View>
                                );
                            }}
                            search
                            searchInputStyle={styles.dropdownSearchInputStyleStyle}
                            searchPlaceHolder={'Search here'}
                            searchPlaceHolderColor={'#F8F8F8'}
                            renderSearchInputLeftIcon={() => {
                                return <Ionicons name={'search'} color={'#FFF'} size={22} />;
                            }}
                        />
                    </View>
                    {errors.city && (
                        <Text style={styles.errorMessage}>
                            {errors.city}
                        </Text>
                    )}
                    <Input
                        onChangeText={text => handleOnchange(text, 'facebook')}
                        onFocus={() => handleError(null, 'facebook')}
                        iconName="facebook"
                        label="Facebook"
                        placeholder="Facebook"
                        value={inputs?.social_networks?.facebook}
                        error={errors.facebook}
                        password
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'instagram')}
                        onFocus={() => handleError(null, 'instagram')}
                        iconName="instagram"
                        label="Instagram"
                        placeholder="Instagram"
                        value={inputs?.social_networks?.instagram}
                        error={errors.instagram}
                        password
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'twitter')}
                        onFocus={() => handleError(null, 'twitter')}
                        iconName="twitter"
                        label="Twitter"
                        placeholder="Twitter"
                        value={inputs?.social_networks?.twitter}
                        error={errors.twitter}
                        password
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'youtube')}
                        onFocus={() => handleError(null, 'youtube')}
                        iconName="youtube"
                        label="Youtube"
                        placeholder="Youtube"
                        value={inputs?.social_networks?.youtube}
                        error={errors.youtube}
                        password
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
    dropdownSelectedRowStyle: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    dropdownButtonStyle: {
        width: '100%',
        height: 45,
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: grey,
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
        borderRadius: 20
    },
    dropdownButtonTxt: {
        color: grey,
        textAlign: 'left',
        fontSize: 14,
        marginHorizontal: 12,
        paddingTop: 5
    },
    dropdown3DropdownStyle: {
        backgroundColor: 'slategray'
    },
    dropdown3RowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
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
    dropdownSearchInputStyleStyle: {
        backgroundColor: 'slategray',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },
    wrapperSelect: {
        flex: 1,
        flexDirection: 'row'
    },
    errorMessage: {
        marginTop: 7,
        color: Colors.red,
        fontSize: 12
    }
});