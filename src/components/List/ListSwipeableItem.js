import React from 'react';
import {buildNotificationData, getAvatarProfileURL, prepareToEdit} from "../../utils";
import Colors from "../../utils/Colors";
import SwipeableFlatList from 'react-native-swipeable-list';
import {Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {iconFontMedium} from "../../utils/Styles";
import {AntDesign, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {useGetStoreSetting} from "../../hooks/useGetStoreSetting";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";
import {deleteDataHandler} from "../../redux";
import {useDispatch} from "react-redux";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION} from "../../utils/Constants";

const darkColors = {
    background: 'white',
    primary: '#BB86FC',
    primary2: '#3700b3',
    secondary: '#03DAC6',
    onBackground: 'black',
    error: '#CF6679',
};

const colorEmphasis = {
    high: 0.87,
    medium: 0.6,
    disabled: 0.38,
};

const extractItemKey = item => {
    return item.index;
};

const Item = ({item}) => {
    return (
        <>
            <View style={styles.item}>
                <Image style={styles.avatar} source={{uri: getAvatarProfileURL(item.avatar)}}/>
                <View style={styles.messageContainer}>
                    <Text style={styles.name} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <Text style={styles.subject} numberOfLines={1}>
                        {item.company}
                    </Text>
                    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="update" size={16} color={Colors.darkBlue} />
                        <Text style={styles.text} numberOfLines={2}>
                            {moment(item.createdDate).calendar()}
                        </Text>
                    </View>
                </View>
            </View>
            <View />
        </>
    );
};

function renderItemSeparator() {
    return <View style={styles.itemSeparator} />;
}


const ListSwipeableItem = ({data}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {enabledDelete} = useGetStoreSetting();
    const {getItem, setItem} = useAsyncStorage(NOTIFICATION);

    const getEditItem = (item) => {
        return prepareToEdit(item);
    }

    const deleteHandler = (item) => {
        deleteDataHandler(item.index, dispatch);
        storeNotification(buildNotificationData('Delete ' + item.name, item.avatar))
    }

    const storeNotification = async jsonData => {
        let data = [];
        const item = await getItem();
        if (item) {
            data = JSON.parse(item);
        }

        await setItem(JSON.stringify([...data, jsonData]));
    };

    const QuickActions = (index, item) => {
        return (
            <View style={styles.qaContainer}>
                <View style={[styles.buttonContainer]}>
                    <Pressable onPress={() => navigation.navigate({
                        name: 'Form',
                        params: getEditItem(item)
                    })}>
                        <MaterialCommunityIcons style={styles.buttonAction} name="account-edit-outline" size={iconFontMedium} />
                    </Pressable>
                </View>
                <View style={[styles.buttonContainer]}>
                    <Pressable onPress={() => navigation.navigate({
                        name: 'Detail',
                        params: getEditItem(item)
                    })}>
                        <Feather style={styles.buttonAction} name="user-check" size={iconFontMedium} color="black" />
                    </Pressable>
                </View>
                {enabledDelete && (
                    <View style={[styles.buttonContainer]}>
                        <Pressable onPress={() => deleteHandler(item)}>
                            <AntDesign style={styles.buttonDeleteAction} name="deleteuser" size={iconFontMedium} />
                        </Pressable>
                    </View>
                )}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <SwipeableFlatList
                keyExtractor={extractItemKey}
                data={data}
                renderItem={({item}) => (
                    <Item item={item} />
                )}
                maxSwipeDistance={240}
                renderQuickActions={({index, item}) => QuickActions(index, item)}
                contentContainerStyle={styles.contentContainerStyle}
                shouldBounceOnMount={true}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </SafeAreaView>
    );
}

export default ListSwipeableItem;
const styles = StyleSheet.create({
    container: {
        marginTop:5,
        backgroundColor: 'white'
    },
    headerContainer: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
        color: darkColors.onBackground,
        opacity: colorEmphasis.high,
    },
    item: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 80,
        padding: 10,
        marginTop: 5
    },
    messageContainer: {
        backgroundColor: darkColors.backgroundColor,
        maxWidth: 300,
        marginLeft: 30
    },
    name: {
        fontSize: 16,
        color: Colors.darkBlue,
        fontWeight: '600',
    },
    subject: {
        fontSize: 14,
        color: darkColors.onBackground,
        opacity: colorEmphasis.high
    },
    text: {
        fontSize: 11,
        color: darkColors.onBackground,
        opacity: colorEmphasis.medium,
        paddingLeft: 5
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: darkColors.onBackground,
        opacity: colorEmphasis.high,
        marginRight: 7,
        marginLeft: 20,
        alignSelf: 'center',
        shadowColor: darkColors.secondary,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: colorEmphasis.high,
    },
    itemSeparator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: darkColors.onBackground,
        opacity: colorEmphasis.medium,
    },
    qaContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    buttonText: {
        fontWeight: 'bold',
        opacity: colorEmphasis.high,
    },
    button1Text: {
        color: Colors.darkBlue,
    },
    button2Text: {
        color: darkColors.secondary,
    },
    button3Text: {
        color: darkColors.error,
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: darkColors.backgroundColor,
    },
    buttonContainer: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 30,
        padding: 8,
        marginTop: 5,
        borderColor: Colors.darkBlue,
        marginRight: 12,
        alignItems: 'center'
    },
    buttonAction: {
        fontSize: 16,
        color: Colors.darkBlue
    },
    buttonDeleteAction: {
        fontSize: 16,
        color: Colors.red
    }
});