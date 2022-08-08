import * as React from "react";
import FormScreen from "./FormScreen";
import SearchScreen from "./SearchScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Form" component={FormScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
            </Stack.Navigator>
        </>
    );
}

export default StackScreen;