import DrawerContent from "./DrawerContent";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ContactScreen from "./ContactScreen";
import FavoriteScreen from "./FavoriteScreen";
import PeopleScreen from "./PeopleScreen";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {grey, iconFontSmall} from "../utils/Styles";
import HeaderRight from "../components/Header/HeaderRight";
import StackScreen from "./StackScreen";

const Drawer = createDrawerNavigator();

const LeftNavDrawer = () => {
    return (
        <>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={(props) => <DrawerContent {...props} />}
                screenOptions={{
                    headerShown: true,
                    drawerActiveBackgroundColor: '#aa18ea',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -15
                    }
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={StackScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="home-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRight />)
                    }}

                />
                <Drawer.Screen
                    name="Contact"
                    component={ContactScreen}
                    options={{
                        drawerIcon: () => ( <AntDesign name="contacts" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="Favorite"
                    component={FavoriteScreen}
                    options={{
                        drawerIcon: () => ( <MaterialIcons name="favorite-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="People"
                    component={PeopleScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="people-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="Company"
                    component={PeopleScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="people-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
            </Drawer.Navigator>
        </>
    );
}

export default LeftNavDrawer;