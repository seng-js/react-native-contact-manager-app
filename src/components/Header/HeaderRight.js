import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import {iconFontSmall} from "../../utils/Styles";
import * as React from "react";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {defaultContact} from "../../utils/Constants";
import Colors from "../../utils/Colors";
import {useDispatch, useSelector} from "react-redux";
import SearchBar from '@pnap/react-native-search-bar'
import {getFilterData} from "../../redux/actions";

const HeaderRight = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const enableNotification = state.enableNotification;
    const navigation = useNavigation();
    const [isToggleSearch, setIsToggleSearch] = useState(false);
    const onToggleSearchBar = () => {
        setIsToggleSearch(!isToggleSearch);
        if (isToggleSearch) {
            dispatch(getFilterData({filterByName: ''}))
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, marginTop: -18}}>
                <SearchBar
                    onSubmitSearch={(value) => dispatch(getFilterData({filterByName: value}))}
                    onActiveSearch={(value) => {console.log(value)}}
                    onToggleSearchBar={() => onToggleSearchBar()}
                    inputTextStyle={styles2.searchBarInput}
                    buttonStyle={styles2.searchButton}
                    customIcon={(<Feather name={isToggleSearch ? 'x' : 'search'} size={iconFontSmall} style={{marginRight: 8}} color={Colors.darkerBlue} />)}
                    buttonTextStyle={styles2.searchButtonText}
                    underlineActiveColor={"#9f9ea4"}
                    underlineInactiveColor={"#6d28d9"}
                />
            </View>

            {
                !isToggleSearch && enableNotification && (
                    <TouchableOpacity
                        onPress={() => {}}
                        underlayColor='#042417'>
                        <View
                            style={styles.btnContainer}>
                            <Ionicons name="notifications-outline" size={iconFontSmall} color={Colors.darkerBlue} />
                        </View>
                    </TouchableOpacity>
                )
            }
            {
                !isToggleSearch && (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate({
                                name: 'Form',
                                params: defaultContact
                            });
                        }}
                        underlayColor='#042417'>
                        <View
                            style={styles.btnAdd}>
                            <AntDesign name="adduser" size={iconFontSmall} color={Colors.darkerBlue} />
                        </View>
                    </TouchableOpacity>
                )
            }
            {
                !isToggleSearch && (
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../../assets/images/img0.jpg')} />
                    </View>
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
    searchContainer: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginTop: 0
    },
    item: {
        backgroundColor: "#f5f520",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    btnClickContain: {
    },
    btnContainer: {
        marginRight: 16,
        marginLeft: 7
    },
    btnAdd: {
        marginRight: 16,
        marginLeft: 0
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    },
    imageContainer: {
        marginRight: 6
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginTop: -2,
        borderWidth: 1,
        borderColor: Colors.grey
    }
});

const styles2 = StyleSheet.create({
    searchToolContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 5,
        marginTop: -10,
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
    iconStyle: {
        marginRight: 10
    }
});