import {View} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import HeaderProfile from "./HeaderProfile";
import * as React from "react";
import LeftNavBottom from "./LeftNavBottom";

const CustomDrawerContent = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#8200d6'}}>
                <HeaderProfile />
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <LeftNavBottom />
        </View>
    );
}

export default CustomDrawerContent;