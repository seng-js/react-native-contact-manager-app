import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons, Octicons} from "@expo/vector-icons";
import * as React from "react";
import {iconFontSmall} from "../../utils/Styles";

const LeftNavBottom = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={styles.row}>
                    <Ionicons name="settings-outline" size={iconFontSmall} color="black" />
                    <Text style={styles.icon}>Setting</Text>
                </View>
                <View style={styles.row}>
                    <Octicons name="sign-out" size={iconFontSmall} color="black" />
                    <Text style={styles.icon}>Sign out</Text>
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
            fontSize: 15,
            marginLeft: 10
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5
        }
    }
);