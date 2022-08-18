import * as React from "react";
import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {NOTIFICATION} from "../utils/AsyncStorage";

const NotificationScreen = () => {
    const [notifications, setNotifications] = useState('');

    const getData = async () => {
        try {
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys()
            } catch(e) {
                console.log('Read key error')
            }

            keys.forEach((key) => {
                try {
                    console.log(key);
                } catch(e) {
                    // error reading value
                }
            })

        } catch(e) {
            console.log('NotificationScreen: Error reading value');
        }
    }

    useEffect(() => {
        getData();
    }, []);

     return (
        <View>
            <Text>Notification Coming soon</Text>
        </View>
    );
}

export default NotificationScreen;