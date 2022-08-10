import {Button, Dimensions, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {DarkGray, grey} from "../utils/Styles";
import Input from '../components/Form/Input';
import {CheckBox} from "@rneui/themed";
import Colors from "../utils/Colors";
import {RadioButton} from 'react-native-flexi-radio-button';
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const {width} = Dimensions.get('window');
const FormScreen = ({route, navigation}) => {
    console.log('FormScreen' + Math.random());
    const dataList = [
        {key:'1', value: 'Jammu & Kashmir'},
        {key:'2', value: 'Gujrat'},
        {key:'3', value: 'Maharashtra'},
        {key:'4', value: 'Goa'},
    ];
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

    const countriesWithFlags = [
        {title: 'Avata Default', image: require('../../assets/images/img0.jpg')},
        {title: 'Avata F1', image: require('../../assets/images/img1.jpg')},
        {title: 'Avata M1', image: require('../../assets/images/img2.jpg')},
        {title: 'Avata M2', image: require('../../assets/images/img3.jpg')},
        {title: 'Avata F2', image: require('../../assets/images/img4.jpg')},
        {title: 'Avata F3', image: require('../../assets/images/img5.jpg')},
        {title: 'Avata M3', image: require('../../assets/images/img6.jpg')},
        {title: 'Avata F4', image: require('../../assets/images/img7.jpg')}
    ];

    const listPosition = [
        {title: 'Select Position', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Web Designer', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'UI Designer', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Senior full stack engineer', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Software engineer frontend', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Senior Software Engineer', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Software engineer backend', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Android developer', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Project coordinator', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Mobile Software Engineer', image: require('../../assets/images/flag_ukraine.png')},
    ];

    const listCity = [
        {title: 'Ukraine, Kyiv', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Ukraine, Kharkiv', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Ukraine, Odessa', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Ukraine, Dnipro', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Ukraine, Lviv', image: require('../../assets/images/flag_ukraine.png')},
        {title: 'Cambodia, Phnom Penh', image: require('../../assets/images/flag_cambodia.png')}
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

    const [selectedValue, setSelectedValue] = useState("Customer");
    //state created for select box
    const [isSelected, setSelection] = useState(false);
    const countries = [
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil',
        'England',
        'Dubai',
        'France',
        'Saudi Arabia',
        'Argentina',
        'India',
    ];
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{padding: 10}}>
                <View style={{marginVertical: 20}}>
                    <SelectDropdown
                        data={countriesWithFlags}
                        // defaultValueByIndex={1}
                        defaultValue={{
                          title: 'England',
                          image: defaultAvata,
                        }}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonStyle={styles.dropdown3BtnStyle}
                        renderCustomizedButtonChild={(selectedItem, index) => {
                            return (
                                <View style={styles.dropdown3BtnChildStyle}>
                                    {selectedItem ? (
                                        <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                                    ) : (
                                        <Image source={defaultAvata} style={styles.dropdown3BtnImage}  />
                                    )}
                                    <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select avata'}</Text>
                                    <FontAwesome name="chevron-down" color={'#444'} size={16} />
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
                            // defaultValueByIndex={1}
                            // defaultValue={{
                            //   title: 'England',
                            //   image: require('./Images/England.jpg'),
                            // }}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonStyle={styles.dropdown3BtnStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        {selectedItem ? (
                                            <MaterialCommunityIcons name="medal-outline" color={'#444'} size={28} />
                                        ) : (
                                            <MaterialCommunityIcons name="medal-outline" color={'#444'} size={28} />
                                        )}
                                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select position'}</Text>
                                        <FontAwesome name="chevron-down" color={'#444'} size={18} />
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
                            // defaultValue={{
                            //   title: 'England',
                            //   image: require('./Images/England.jpg'),
                            // }}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            buttonStyle={styles.dropdown3BtnStyle}
                            renderCustomizedButtonChild={(selectedItem, index) => {
                                return (
                                    <View style={styles.dropdown3BtnChildStyle}>
                                        {selectedItem ? (
                                            <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                                        ) : (
                                            <Ionicons name="location-outline" color={'#444'} size={28} />
                                        )}
                                        <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select city'}</Text>
                                        <FontAwesome name="chevron-down" color={'#444'} size={18} />
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
    },
    inpt: {
        borderWidth: 2,
        borderColor: "#0b8ed2",
        borderRadius: 4,
        padding: 8,
        marginBottom: 15
    },
    selectContainer: {
        marginTop: 10
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        width,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
    },
    headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
    saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
    viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        paddingBottom: '20%',
    },

    dropdown1BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },

    dropdown2BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#444',
        borderRadius: 8,
    },
    dropdown2BtnTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#444',
        borderRadius: 12,
    },
    dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
    dropdown2RowTxtStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dropdown2SelectedRowStyle: {backgroundColor: 'rgba(255,255,255,0.2)'},
    dropdown2searchInputStyleStyle: {
        backgroundColor: '#444',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },

    dropdown3BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
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
    dropdown3BtnImage: {width: 30, height: 30, resizeMode: 'cover', borderRadius: 20},
    dropdown3BtnTxt: {
        color: '#444',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 12,
    },
    dropdown3DropdownStyle: {backgroundColor: 'slategray'},
    dropdown3RowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdownRowImage: {width: 30, height: 30, resizeMode: 'cover'},
    dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 12,
    },
    dropdown3searchInputStyleStyle: {
        backgroundColor: 'slategray',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },
});