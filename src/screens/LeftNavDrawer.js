import DrawerContent from "./DrawerContent";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import ContactScreen from "./ContactScreen";
import FavoriteScreen from "./FavoriteScreen";
import PeopleScreen from "./PeopleScreen";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {iconFontSmall} from "../utils/Styles";
import HeaderRight from "../components/Header/HeaderRight";
import Colors from "../utils/Colors";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import FormScreen from "./FormScreen";

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
                        marginLeft: -15,
                        marginTop: 0
                    }
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="home-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}

                />
                <Drawer.Screen
                    name="Contact"
                    component={ContactScreen}
                    options={{
                        drawerIcon: () => ( <AntDesign name="contacts" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="Favorite"
                    component={FavoriteScreen}
                    options={{
                        drawerIcon: () => ( <MaterialIcons name="favorite-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="People"
                    component={PeopleScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="people-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="Company"
                    component={PeopleScreen}
                    options={{
                        drawerIcon: () => ( <MaterialCommunityIcons name="office-building-outline" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="search" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
                <Drawer.Screen
                    name="Form"
                    component={FormScreen}
                    options={{
                        title: 'Contact Form',
                        drawerIcon: () => ( <AntDesign name="form" size={iconFontSmall} color={Colors.darkerBlue} />),
                        headerRight: () => ( <HeaderRight />)
                    }}
                />
            </Drawer.Navigator>
        </>
    );
}

export default LeftNavDrawer;