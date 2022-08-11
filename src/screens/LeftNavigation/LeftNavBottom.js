import {Text, TouchableOpacity, View} from "react-native";
import {Octicons, Ionicons} from "@expo/vector-icons";
import * as React from "react";

const LeftNavBottom = () => {
    return (
        <View style={{padding: 15, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="settings-outline" size={20} color="black" />
                    <Text style={{fontSize: 15, marginLeft: 10}}>Setting</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <Octicons name="sign-out" size={20} color="black" />
                    <Text style={{fontSize: 15, marginLeft: 10}}>Sign out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default LeftNavBottom;