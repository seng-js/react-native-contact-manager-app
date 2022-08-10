import {Button, Dimensions, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {DarkGray, grey} from "../utils/Styles";
import Input from '../components/Form/Input';
import {CheckBox} from "@rneui/themed";
import Colors from "../utils/Colors";
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {listAvata, listCity, listPosition} from "../utils/constants";
import defaultAvata from "../../assets/images/img-default.jpg";

const {width} = Dimensions.get('window');
const FormScreen = ({route, navigation}) => {
    console.log('FormScreen' + Math.random());
    const defaultAvata = require('../../assets/images/img-default.jpg');
    const [selected, setSelected] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [inputs, setInputs] = useState({
        avata: '',
        name: '',
        company: '',
        isFavorite: false,
        isContact: false,
        position: '',
        city: '',
        social_networks: {
            facebook:'',
            instagram:'',
            twitter:'',
            youtube:''
        }
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.name) {
            handleError('Name is required field!', 'name');
            isValid = false;
        }

        if (!inputs.company) {
            handleError('Company is required field!', 'company');
            isValid = false;
        }

        if (!selected) {
            handleError('Position is required field!', 'position');
            isValid = false;
        }

        if (isValid) {
            submitHandle();
        }
    };

    const submitHandle = () => {
        console.log(JSON.stringify(inputs));
        navigation.navigate('Home');
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    useEffect(() => {
        setInputs(route.params);
        setSelected(route.params.position);
    }, [route.params]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{padding: 10}}>
                <View style={{marginVertical: 20}}>
                    <SelectDropdown
                        data={listAvata}
                        // defaultValueByIndex={1}
                        defaultValue={listAvata[0]}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonStyle={styles.dropdown3BtnStyle}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={styles.dropdown3BtnChildStyle}>
                                    <View style={styles.wrapperSelect}>
                                        {selectedItem ? (
                                            <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                                        ) : (
                                            <Image source={defaultAvata} style={styles.dropdown3BtnImage}  />
                                        )}
                                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select avata'}</Text>
                                    </View>
                                    <FontAwesome name="chevron-down" color={Colors.darkBlue} size={16} />
                                </View>
                            );
                        }}
                        dropdownStyle={styles.dropdown3DropdownStyle}
                        rowStyle={styles.dropdown3RowStyle}
                        selectedRowStyle={styles.dropdown1SelectedRowStyle}
                        renderCustomizedRowChild={(item, index) => {
                            return (
                                <View style={styles.dropdown3RowChildStyle}>
                                    <Image source={item.image} style={styles.dropdownRowImage} borderRadius={20} />
                                    <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                </View>
                            );
                        }}
                        searchInputStyle={styles.dropdown3searchInputStyleStyle}
                        searchPlaceHolder={'Search here'}
                        searchPlaceHolderColor={'#F8F8F8'}
                        renderSearchInputLeftIcon={() => {
                            return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
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
                    <View style={styles.selectContainer}>
                        <SelectDropdown
                            data={listPosition}
                            defaultValueByIndex={1}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonStyle={styles.dropdown3BtnStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        <View style={styles.wrapperSelect}>
                                            {selectedItem ? (
                                                <MaterialCommunityIcons name="medal-outline" style={{marginLeft: -10}} color={Colors.darkBlue} size={22} />
                                            ) : (
                                                <MaterialCommunityIcons name="medal-outline" color={'#444'} size={22} />
                                            )}
                                            <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select position'}</Text>
                                        </View>
                                        <FontAwesome name="chevron-down" color={Colors.darkBlue} size={18} />
                                    </View>
                                );
                            }}
                            dropdownStyle={styles.dropdown3DropdownStyle}
                            rowStyle={styles.dropdown3RowStyle}
                            selectedRowStyle={styles.dropdown1SelectedRowStyle}
                            renderCustomizedRowChild={(item, index) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>
                                        <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                    </View>
                                );
                            }}
                            search
                            searchInputStyle={styles.dropdown3searchInputStyleStyle}
                            searchPlaceHolder={'Search here'}
                            searchPlaceHolderColor={'#F8F8F8'}
                            renderSearchInputLeftIcon={() => {
                                return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
                            }}
                        />
                    </View>
                    <View style={styles.selectContainer}>
                        <SelectDropdown
                            data={listCity}
                            // defaultValueByIndex={1}
                            defaultValue={listCity[0]}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonStyle={styles.dropdown3BtnStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        <View style={styles.wrapperSelect}>
                                            {selectedItem ? (
                                                <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                                            ) : (
                                                <Ionicons name="location-outline" color={'#444'} size={28} />
                                            )}
                                            <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select city'}</Text>
                                        </View>
                                        <FontAwesome name="chevron-down" color={Colors.darkBlue} size={18} />
                                    </View>
                                );
                            }}
                            dropdownStyle={styles.dropdown3DropdownStyle}
                            rowStyle={styles.dropdown3RowStyle}
                            selectedRowStyle={styles.dropdown1SelectedRowStyle}
                            renderCustomizedRowChild={(item, index) => {
                                return (
                                    <View style={styles.dropdown3RowChildStyle}>
                                        <Image source={item.image} style={styles.dropdownRowImage} borderRadius={20} />
                                        <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                                    </View>
                                );
                            }}
                            search
                            searchInputStyle={styles.dropdown3searchInputStyleStyle}
                            searchPlaceHolder={'Search here'}
                            searchPlaceHolderColor={'#F8F8F8'}
                            renderSearchInputLeftIcon={() => {
                                return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
                            }}
                        />
                    </View>
                    {errors.position && (
                        <Text style={{marginTop: 7, color: Colors.red, fontSize: 12}}>
                            {errors.position}
                        </Text>
                    )}
                    <View style={styles.formElementCheckbox}>
                        <CheckBox
                            size={20}
                            containerStyle={{width: "50%", backgroundColor: 'none'}}
                            textStyle={{color: DarkGray, fontSize: 13}}
                            title="Add to contact?"
                            checked={isFavorite || inputs?.isFavorite}
                            onPress={() => {setIsFavorite(!isFavorite), setInputs({isFavorite: isFavorite, ...inputs})}}
                        />
                        <CheckBox
                            size={20}
                            containerStyle={{width: "50%", backgroundColor: 'none'}}
                            textStyle={{color: DarkGray, fontSize: 13}}
                            title="Add to favorite?"
                            checked={isContact || inputs?.isContact}
                            name
                            onPress={() => {setIsContact(!isContact), setInputs({isContact: isContact, ...inputs})}}
                        />
                    </View>
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
                        <Button style={styles.button} title="Save" onPress={validate} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default FormScreen;

const styles = StyleSheet.create({
    formElementCheckbox: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
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
    dropdown1SelectedRowStyle: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    dropdown3BtnStyle: {
        width: '100%',
        height: 45,
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: grey,
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 20
    },
    dropdown3BtnImage: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        borderRadius: 20
    },
    dropdown3BtnTxt: {
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
    dropdown3searchInputStyleStyle: {
        backgroundColor: 'slategray',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },
    wrapperSelect: {
        flex: 1,
        flexDirection: 'row'
    }
});