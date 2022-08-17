import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {getInitDataHandler} from "../redux";
import DrawerNavigator from "./DrawerNavigator";

const MainNavigator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getInitDataHandler(dispatch);
    });

    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default MainNavigator;
