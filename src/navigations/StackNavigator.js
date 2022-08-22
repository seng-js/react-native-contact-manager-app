import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FormScreen from "../screens/FormScreen";
import React from "react";
import DrawerNavigator from "./DrawerNavigator";
import NotificationScreen from "../screens/NotificationScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="LeftMenu" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{ title: 'Notifications' }}  />
        </Stack.Navigator>
    );
};

export default StackNavigator;