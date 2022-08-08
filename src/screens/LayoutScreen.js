import {SafeAreaView, ScrollView, Text} from "react-native";
import * as React from "react";
import HeaderScreen from "./HeaderScreen";
import ListItemScreen from "./ListItemScreen";

const LayoutScreen = (props) => {
     return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{padding: 10}}>
                <HeaderScreen title={props.title} navigation={props.navigation} />
                <ListItemScreen />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LayoutScreen;