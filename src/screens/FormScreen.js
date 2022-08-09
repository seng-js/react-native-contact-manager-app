import {Alert, Button, Keyboard, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View,} from "react-native";
import * as React from "react";
import {useState} from "react";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {grey, iconFontSmall} from "../utils/Styles";
import ImageRadio from "../components/Form/ImageRadio";
import {useForm, Controller} from "react-hook-form";
import {useNavigation} from "@react-navigation/native";

// import Button from '../components/Form/Button';
import Input from '../components/Form/Input';
import Loader from '../components/Form/Loader';
import Colors from "../utils/Colors";

const FormScreen = ({navigation}) => {
    const { handleSubmit, control } = useForm();
    const [isEnabledFavorite, setIsEnabledFavorite] = useState(false);
    const [isEnabledContact, setIsEnabledContact] = useState(false);
    const toggleSwitchFavorite = () => setIsEnabledFavorite(previousState => !previousState);
    const toggleSwitchContact = () => setIsEnabledContact(previousState => !previousState);
    const onSubmit = data => {
        console.log(data);
    };
    const [inputs, setInputs] = React.useState({
        name: '',
        company: '',
        position: '',
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: ''
    });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

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

        if (!inputs.position) {
            handleError('Position is required field!', 'position');
            isValid = false;
        }

        if (isValid) {
            submitHandle();
        }
    };

    const submitHandle = () => {
        console.log(JSON.stringify(inputs));
        setLoading(true);
        setTimeout(() => {
            try {
                setLoading(false);
                console.log(JSON.stringify(inputs));
                navigation.navigate('Home');
            } catch (error) {
                Alert.alert('Error', 'Something went wrong');
            }
        }, 3000);
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };
    return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{padding: 10}}>
            <View style={{marginVertical: 20}}>

                <Input
                    onChangeText={text => handleOnchange(text, 'name')}
                    onFocus={() => handleError(null, 'name')}
                    iconName="account-outline"
                    label="Name"
                    placeholder="Name"
                    error={errors.name}
                />
                <Input
                    onChangeText={text => handleOnchange(text, 'company')}
                    onFocus={() => handleError(null, 'company')}
                    iconName="office-building-outline"
                    label="Company"
                    placeholder="Company"
                    error={errors.company}
                />
                <Input
                    onChangeText={text => handleOnchange(text, 'position')}
                    onFocus={() => handleError(null, 'position')}
                    iconName="medal-outline"
                    label="Position"
                    placeholder="Position"
                    error={errors.position}
                />
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
                <View style={styles.formElementCheckbox}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabledContact ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchContact}
                        value={isEnabledContact}
                    />
                    <Text style={{color: grey}}>Add to favorite?</Text>
                </View>
                <Input
                    onChangeText={text => handleOnchange(text, 'facebook')}
                    onFocus={() => handleError(null, 'facebook')}
                    iconName="facebook"
                    label="Facebook"
                    placeholder="Facebook"
                    error={errors.facebook}
                    password
                />
                <Input
                    onChangeText={text => handleOnchange(text, 'instagram')}
                    onFocus={() => handleError(null, 'instagram')}
                    iconName="instagram"
                    label="Instagram"
                    placeholder="instagram"
                    error={errors.instagram}
                    password
                />
                <Input
                    onChangeText={text => handleOnchange(text, 'twitter')}
                    onFocus={() => handleError(null, 'twitter')}
                    iconName="twitter"
                    label="Twitter"
                    placeholder="Twitter"
                    error={errors.twitter}
                    password
                />
                <Input
                    onChangeText={text => handleOnchange(text, 'youtube')}
                    onFocus={() => handleError(null, 'youtube')}
                    iconName="youtube"
                    label="Youtube"
                    placeholder="Youtube"
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
        borderRadius: 20,
        width: 40,
        height: 40,
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
    }
});