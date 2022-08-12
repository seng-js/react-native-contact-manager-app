import {SafeAreaView} from "react-native";
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
            <ListItem data={data} />
        </SafeAreaView>
    );
}

export default LayoutScreen;