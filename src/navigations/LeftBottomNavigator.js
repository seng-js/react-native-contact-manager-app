import {AsyncStorage, StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {SETTING_DATA} from "../utils/Constants";
import {useDispatch} from "react-redux";
import {updateSetting} from "../redux/actions";

const LeftBottomNavigator = () => {
    const dispatch = useDispatch();
    const {getItem, setItem} = useAsyncStorage(SETTING_DATA);
    const [enabledDelete, setEnabledDelete] = useState(false);
    const [enabledNotification, setEnabledNotification] = useState(false);

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
        dispatch(updateSetting({enabledDelete: setting.enabledDelete}));
        dispatch(updateSetting({enabledNotification: setting.enabledNotification}));
    };

    useEffect(() => {
        getStoreSetting();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledDelete} onValueChange={toggleSwitchEnabledDelete} />
                    <Text style={styles.textSwitch}>Enable Delete</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledNotification} onValueChange={toggleSwitchNotification} />
                    <Text style={styles.textSwitch}>Enable Notification</Text>
                </View>
            </TouchableOpacity>
        </View>
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
            fontSize: 14,
        },
        rowSwitch: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: -10
        },
    }
);