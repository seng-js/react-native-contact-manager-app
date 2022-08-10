import {SafeAreaView, ScrollView, Text} from "react-native";
import * as React from "react";
import ListItem from "../components/List/ListItem";

const LayoutScreen = (props) => {
     return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{padding: 10}}>
                <ListItem />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LayoutScreen;