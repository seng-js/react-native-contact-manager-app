import {StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateSetting} from "../redux/actions";

const LeftBottomNavigator = () => {
    const dispatch = useDispatch();
    const [isEnabledDelete, setIsEnabledDelete] = useState(false);
    const [isEnabledNotification, setIsEnabledNotification] = useState(false);
    const toggleSwitchEnabledDelete = () => {
        setIsEnabledDelete(previousState => !previousState);
        dispatch(updateSetting({enableDelete: !isEnabledDelete}));
    };
    const toggleSwitchNotification = () => {
        setIsEnabledNotification(previousState => !previousState);
        dispatch(updateSetting({enableNotification: !isEnabledNotification}));
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={isEnabledDelete} onValueChange={toggleSwitchEnabledDelete} />
                    <Text style={styles.textSwitch}>Enable Delete</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch  style={styles.switch} value={isEnabledNotification} onValueChange={toggleSwitchNotification} />
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