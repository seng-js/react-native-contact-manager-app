import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import {iconFontSmall} from "../../utils/Styles";
import * as React from "react";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {defaultContact, IMAGE_URL, NOTIFICATION} from "../../utils/Constants";
import Colors from "../../utils/Colors";
import {useDispatch, useSelector} from "react-redux";
import SearchBar from '@pnap/react-native-search-bar'
import {getFilterData} from "../../redux/actions";
import {Badge} from "react-native-paper";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

const HeaderRight = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [profile, setProfile] = useState({ avatar: 'img/img1.jpg'});
    const enabledNotification = state.enabledNotification;
    const [count, setCount] = useState(0)
    const navigation = useNavigation();
    const [isToggleSearch, setIsToggleSearch] = useState(false);
    const {getItem} = useAsyncStorage(NOTIFICATION);

    const getCountNotification = async () => {
        console.log('getCountNotification');
        try {
            let notifications = [];
            const item = await getItem();
            if (item) {
                notifications = JSON.parse(item);
            }
            setCount(notifications.length);
        } catch(e) {
            console.log('Error reading value');
        }
    }

    const onToggleSearchBar = () => {
        setIsToggleSearch(!isToggleSearch);
        if (isToggleSearch) {
            dispatch(getFilterData({filterByName: ''}))
        }
    }

    useEffect(() => {
        setProfile(state?.tempContacts[0]);
        getCountNotification();
    }, [state?.tempContacts[0]]);

    return (
        <View style={styles.container}>
            <View style={{flex: 1, marginTop: -18}}>
                <SearchBar
                    onSubmitSearch={(value) => dispatch(getFilterData({filterByName: value}))}
                    onActiveSearch={(value) => {console.log(value)}}
                    onToggleSearchBar={() => onToggleSearchBar()}
                    inputTextStyle={styles.searchBarInput}
                    buttonStyle={styles.searchButton}
                    customIcon={(<Feather name={isToggleSearch ? 'x' : 'search'} size={iconFontSmall} style={{marginRight: 8}} color={Colors.darkerBlue} />)}
                    buttonTextStyle={styles.searchButtonText}
                    underlineActiveColor={"#9f9ea4"}
                    underlineInactiveColor={"#6d28d9"}
                />
            </View>
            {
                !isToggleSearch && (
                    <>
                        {
                            enabledNotification && (
                                    <>
                                        <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate('Notification', { name: 'Notification' })
                                        }
                                        underlayColor='#042417'>
                                            <View
                                                style={styles.btnContainer}>
                                                <Ionicons name="notifications-outline" size={iconFontSmall} color={Colors.darkerBlue} />
                                            </View>
                                            {
                                                count > 0 && (
                                                    <Badge visible={true} style={styles.badge} size={16}>{count}</Badge>
                                                )
                                            }
                                        </TouchableOpacity>
                                    </>
                            )
                        }
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate({
                                    name: 'Form',
                                    params: defaultContact
                                })
                            }}
                            underlayColor='#042417'>
                            <View
                                style={styles.btnAdd}>
                                <AntDesign name="adduser" size={iconFontSmall} color={Colors.darkerBlue} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.imageContainer}>
                            <Image source={{uri: IMAGE_URL + profile?.avatar.replace('img/', '')}} style={styles.image} />
                        </View>
                    </>
                )
            }
        </View>
    );
}

export default HeaderRight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginRight: 5
    },
    btnContainer: {
        marginRight: 16,
        marginLeft: 7
    },
    btnAdd: {
        marginRight: 16,
        marginLeft: 0
    },
    imageContainer: {
        marginRight: 6
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginTop: -2
    },
    searchBarInput: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'normal',
        color: "#6d28d9",
        width: "0%",
        borderBottomWidth: 2,
        paddingVertical: 2,
        paddingHorizontal: 0,
    },
    searchButton: {
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: "#4c1d95"
    },
    searchButtonText: {
        fontSize: 14,
        lineHeight: 16,
        color: "#f5f3ff"
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: 10,
        fontSize: 13
    }
});