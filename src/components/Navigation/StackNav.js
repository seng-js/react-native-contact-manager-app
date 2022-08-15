import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import FormScreen from "../../screens/FormScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
    );
};

export default StackNav;