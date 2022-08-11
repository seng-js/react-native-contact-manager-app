import {SafeAreaView, ScrollView} from "react-native";
import * as React from "react";
import ListItem from "../components/List/ListItem";
import {useSelector} from "react-redux";

const LayoutScreen = (props) => {
    const state = useSelector(state => state);
    const contacts = state.contacts;
    let data = [];
    switch (props.title) {
        case 'Contact':
            data = contacts.filter((contact) => contact.isContact);
            break;
        case 'Favorite':
            data = contacts.filter((contact) => contact.isFavorite);
            break;
        default:
            data = contacts;
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <ListItem data={data} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default LayoutScreen;