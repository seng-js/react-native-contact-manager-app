import {StyleSheet, Switch, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateSetting} from "../../redux/actions";

const LeftNavBottom = () => {
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
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabledDelete ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchEnabledDelete}
                        value={isEnabledDelete}
                    />
                    <Text style={styles.textSwitch}>Enable Delete</Text>
                </View>
                <View style={styles.rowSwitch}>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabledNotification ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchNotification}
                        value={isEnabledNotification}
                    />
                    <Text style={styles.textSwitch}>Enable Notification</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default LeftNavBottom;

const styles = StyleSheet.create(
    {
        container: {
            padding: 15,
            borderTopWidth: 1,
            borderTopColor: '#ccc'
        },
        icon: {
            fontSize: 14,
            marginLeft: 25
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5
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