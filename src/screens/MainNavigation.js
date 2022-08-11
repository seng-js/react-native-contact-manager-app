import LeftNavDrawer from "./LeftNavDrawer";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {useEffect} from "react";
import {getInitDataHandler} from "../redux";
import {useDispatch} from "react-redux";

const MainNavigation = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getInitDataHandler(dispatch);
    });

    return (
        <NavigationContainer>
            <LeftNavDrawer />
        </NavigationContainer>
    );
}

export default MainNavigation;