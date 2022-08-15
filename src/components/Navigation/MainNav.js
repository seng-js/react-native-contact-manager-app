import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {getInitDataHandler} from "../../redux";
import DrawerNav from "./DrawerNav";

const MainNav = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getInitDataHandler(dispatch);
    });

    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    );
};

export default MainNav;
