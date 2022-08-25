import {StyleSheet, Switch, Text, View} from "react-native";
import * as React from "react";
import {useEffect, useState} from "react";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {SETTING_DATA} from "../utils/Constants";
import {useDispatch} from "react-redux";
import {updateSetting} from "../redux/actions";
import {useSetStoreSetting} from "../hooks/useSetStoreSetting";

const LeftBottomNavigator = () => {
    const dispatch = useDispatch();
    const {getItem} = useAsyncStorage(SETTING_DATA);
    const [enabledDelete, setEnabledDelete] = useState(false);
    const [enabledNotification, setEnabledNotification] = useState(false);
    const [enabledSwipeList, setEnabledSwipeList]  = useState(false);

    const toggleSwitchDelete = () => {
        setEnabledDelete(previousState => !previousState);
        updateAndStoreSetting({enabledDelete: !enabledDelete});
    };
    const toggleSwitchNotification = () => {
        setEnabledNotification(previousState => !previousState);
        updateAndStoreSetting({enabledNotification: !enabledNotification});
    };

    const toggleSwitchSwipeList = () => {
        setEnabledSwipeList(previousState => !previousState);
        updateAndStoreSetting({enabledSwipeList: !enabledSwipeList});
    };

    const updateAndStoreSetting = (data) => {
        dispatch(updateSetting(data));
        useSetStoreSetting(data);
    }

    const getStoreSetting = async () => {
        const item = await getItem();
        const setting = JSON.parse(item);
        const getEnabledDelete = setting === null ? false : setting?.enabledDelete;
        const getEnabledNotification = setting === null ? false : setting?.enabledNotification;
        const getEnabledSwipeList = setting === null ? false : setting?.enabledSwipeList;
        setEnabledDelete(getEnabledDelete);
        setEnabledNotification(getEnabledNotification);
        setEnabledSwipeList(getEnabledSwipeList);
        dispatch(updateSetting({enabledDelete: getEnabledDelete}));
        dispatch(updateSetting({enabledNotification: getEnabledNotification}));
        dispatch(updateSetting({enabledSwipeList: getEnabledSwipeList}));
    };

    useEffect(() => {
        getStoreSetting();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledSwipeList} onValueChange={toggleSwitchSwipeList} />
                    <Text style={styles.textSwitch}>Enable Swipe List</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={enabledDelete} onValueChange={toggleSwitchDelete} />
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
        }
    }
);
