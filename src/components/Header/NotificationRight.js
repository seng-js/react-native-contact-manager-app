import {Alert, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {iconFontSmall} from "../../utils/Styles";
import * as React from "react";
import {NOTIFICATION} from "../../utils/Constants";
import Colors from "../../utils/Colors";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";

const NotificationRight = () => {
    const {removeItem} = useAsyncStorage(NOTIFICATION);

    const clearNotification = () =>
        Alert.alert(
            "Clear Notifications",
            "Are you sure to clear all notifications",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                },
                { text: "OK", onPress: async () => await removeItem() }
            ]
        );

    return (
        <View>
            <TouchableOpacity
                onPress={() => clearNotification()}
                underlayColor='#042417'>
                <View>
                    <Ionicons name="notifications-off-outline" size={iconFontSmall} color={Colors.darkBlue} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default NotificationRight;