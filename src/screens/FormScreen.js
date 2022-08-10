import {Button, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View,} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {DarkGray, grey} from "../utils/Styles";
import Input from '../components/Form/Input';
import {CheckBox} from "@rneui/themed";
import SelectList from "react-native-dropdown-select-list/index";
import Colors from "../utils/Colors";
import {RadioButton, RadioGroup} from 'react-native-flexi-radio-button'

const FormScreen = ({route, navigation}) => {
    console.log('FormScreen' + Math.random());
    const dataList = [
        {key:'1', value: 'Jammu & Kashmir'},
        {key:'2', value: 'Gujrat'},
        {key:'3', value: 'Maharashtra'},
        {key:'4', value: 'Goa'},
    ];
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
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: ''
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

    const onSelect = (index, value) => {
        console.log(index, value);
    }

    const listAvata = [
        {avata: require('../../assets/images/img0.jpg')},
        {avata: require('../../assets/images/img1.jpg')},
        {avata: require('../../assets/images/img2.jpg')},
        {avata: require('../../assets/images/img3.jpg')},
        {avata: require('../../assets/images/img4.jpg')},
        {avata: require('../../assets/images/img6.jpg')},
        {avata: require('../../assets/images/img7.jpg')},
    ];

    const renderListAvata = listAvata.map(({avata}, key) => {
        return (
            <RadioButton key={key}
                style={{alignItems:'center', marginLeft: -10}}
                value={key}
            >
                <Image
                    style={styles.imageRadio}
                    source={avata}
                />
            </RadioButton>
        )
    });

    useEffect(() => {
        setInputs(route.params);
        setSelected(route.params.position);
    }, [route.params]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{padding: 10}}>
                <View style={{marginVertical: 20}}>
                    <RadioGroup
                        style={{flexGrow: 1, flexDirection: 'row'}}
                        size={14}
                        thickness={1}
                        color='#9575b2'
                        selectedIndex={1}
                        onSelect = {(index, value) => onSelect(index, value)}
                    >
                        {renderListAvata}
                    </RadioGroup>
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
                    <SelectList
                        placeholder="Select Position"
                        onSelect={() => setInputs({position: selected, ...inputs})}
                        setSelected={setSelected}
                        inputStyles={{color: 'grey'}}
                        dropdownTextStyles={{color: grey}}
                        data={dataList}
                        search={false}
                        boxStyles={{borderRadius:8, marginTop: 10, borderColor: grey}} //override default styles
                    />
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
                        value={inputs?.facebook}
                        error={errors.facebook}
                        password
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'instagram')}
                        onFocus={() => handleError(null, 'instagram')}
                        iconName="instagram"
                        label="Instagram"
                        placeholder="Instagram"
                        value={inputs?.instagram}
                        error={errors.instagram}
                        password
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'twitter')}
                        onFocus={() => handleError(null, 'twitter')}
                        iconName="twitter"
                        label="Twitter"
                        placeholder="Twitter"
                        value={inputs?.twitter}
                        error={errors.twitter}
                        password
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'youtube')}
                        onFocus={() => handleError(null, 'youtube')}
                        iconName="youtube"
                        label="Youtube"
                        placeholder="Youtube"
                        value={inputs?.youtube}
                        error={errors.youtube}
                        password
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Save" onPress={validate} />
                    </View>
                </View>
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
        borderRadius: 16,
        width: 28,
        height: 28,
        marginLeft: -2
    },
    buttonContainer: {
        marginTop: 10
    },
    button: {
        color: 'red',
        backgroundColor: 'red'
    },
    input: {
        width: '100%',
        marginTop: -3,
        marginLeft: 5,
    },
    checkbox: {
        backgroundColor: grey
    }
});