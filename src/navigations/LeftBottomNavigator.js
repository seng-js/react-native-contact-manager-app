import {StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {SETTING_DATA} from "../utils/Constants";
import {useDispatch} from "react-redux";
import {updateSetting} from "../redux/actions";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../utils/Colors";
import {useNavigation} from "@react-navigation/native";

const LeftBottomNavigator = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {getItem, setItem} = useAsyncStorage(SETTING_DATA);
    const [enabledDelete, setEnabledDelete] = useState(false);
    const [enabledNotification, setEnabledNotification] = useState(false);
    const [enabledSwipeList, setEnabledSwipeList]  = useState(false);

    const toggleSwitchEnabledDelete = () => {
        setEnabledDelete(previousState => !previousState);
        const data = {enabledDelete: !enabledDelete};
        dispatch(updateSetting(data));
        storeSetting(data);
    };
    const toggleSwitchNotification = () => {
        setEnabledNotification(previousState => !previousState);
        const data = {enabledNotification: !enabledNotification};
        dispatch(updateSetting(data));
        storeSetting(data);
    };

    const toggleSwitchSwipeList = () => {
        setEnabledSwipeList(previousState => !previousState);
        const data = {enabledSwipeList: !enabledSwipeList};
        dispatch(updateSetting(data));
        storeSetting(data);
    };

    const storeSetting = async value => {
        let data = [];
        const item = await getItem();
        if (item) {
            data = JSON.parse(item);
        }

        await setItem(JSON.stringify({...data, ...value}));
    };

    const getStoreSetting = async () => {
        const item = await getItem();
        const setting = JSON.parse(item);
        setEnabledDelete(setting === null ? false : setting.enabledDelete);
        setEnabledNotification(setting === null ? false : setting.enabledNotification);
        setEnabledSwipeList(setting === null ? false : setting.enabledSwipeList);
        dispatch(updateSetting({enabledDelete: setting.enabledDelete}));
        dispatch(updateSetting({enabledNotification: setting.enabledNotification}));
        dispatch(updateSetting({enabledSwipeList: setting.enabledSwipeList}));
    };

    useEffect(() => {
        getStoreSetting();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity  onPress={() =>
                    navigation.navigate('ExportCSV')
                } style={{paddingVertical: 5}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="file-export-outline" size={22} color={Colors.darkBlue} />
                        <Text style={[styles.textSwitch, {marginLeft: 20}]}>Export CSV</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledSwipeList} onValueChange={toggleSwitchSwipeList} />
                    <Text style={styles.textSwitch}>Enable Bottom Tabs</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledSwipeList} onValueChange={toggleSwitchSwipeList} />
                    <Text style={styles.textSwitch}>Enable Swipe List</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledDelete} onValueChange={toggleSwitchEnabledDelete} />
                    <Text style={styles.textSwitch}>Enable Delete</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledNotification} onValueChange={toggleSwitchNotification} />
                    <Text style={styles.textSwitch}>Enable Notification</Text>
                </View>
            </View>
        </>
    );
}

export default LeftBottomNavigator;

const styles = StyleSheet.create(
    {
        container: {
            padding: 15,
            borderTopWidth: 1,
            borderTopColor: '#ccc'
        },
        switch: {
            marginLeft: -5
        },
        textSwitch: {
            fontSize: 13,
        },
        rowSwitch: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -10
        },
        export: {
            marginBottom: 10
        },
        exportText: {
            marginLeft: 15
        }
    }
);