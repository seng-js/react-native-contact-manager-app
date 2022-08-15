import {StyleSheet, View} from "react-native";
import {DrawerItemList} from "@react-navigation/drawer";
import * as React from "react";
import LeftNavBottom from "./LeftNavBottom";
import HeaderProfile from "../Header/HeaderProfile";

const DrawerContent = (props) => {
    return (
        <View style={{flex: 1}}>
            <HeaderProfile />
            <View style={styles.container}>
                <DrawerItemList {...props} />
            </View>
            <LeftNavBottom />
        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#8200d6'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    }
});