import LeftNavDrawer from "./LeftNavDrawer";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <LeftNavDrawer />
        </NavigationContainer>
    );
}

export default RootNavigation;