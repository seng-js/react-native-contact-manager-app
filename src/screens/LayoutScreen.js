import {SafeAreaView, ScrollView} from "react-native";
import * as React from "react";
import ListItem from "../components/List/ListItem";
import {useEffect} from "react";
import {getInitDataHandler} from "../redux";
import {useDispatch} from "react-redux";

const LayoutScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getInitDataHandler(dispatch);
    });
     return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{padding: 10}}>
                <ListItem />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LayoutScreen;