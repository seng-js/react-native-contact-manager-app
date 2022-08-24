import * as React from 'react';
import {Provider} from "react-redux";
import store from "./src/redux/store";
import MainNavigator from "./src/navigations/MainNavigator";
import {useEffect} from "react";
import {useRegisterForPushNotificationsAsync} from "./src/hooks/useRegisterForPushNotificationsAsync";

export default function App() {
    useEffect(() => {
        useRegisterForPushNotificationsAsync();
    }, []);
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
}
