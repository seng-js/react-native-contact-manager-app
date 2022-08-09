import CustomDrawerContent from "./CustomDrawerContent";
import HomeScreen from "./HomeScreen";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ContactScreen from "./ContactScreen";
import FavoriteScreen from "./FavoriteScreen";
import PeopleScreen from "./PeopleScreen";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {grey, iconFontSmall} from "../utils/Styles";
import HeaderRightScreen from "./HeaderRightScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FormScreen from "./FormScreen";
import SearchScreen from "./SearchScreen";
import Form2Screen from "./Form2Screen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const LeftNavDrawer = () => {
    return (
        <>
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}
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
                    component={HomeScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="home-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRightScreen />)
                    }}

                />
                <Drawer.Screen
                    name="Contact"
                    component={ContactScreen}
                    options={{
                        drawerIcon: () => ( <AntDesign name="contacts" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRightScreen />)
                    }}
                />
                <Drawer.Screen
                    name="Favorite"
                    component={FavoriteScreen}
                    options={{
                        drawerIcon: () => ( <MaterialIcons name="favorite-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRightScreen />)
                    }}
                />
                <Drawer.Screen
                    name="People"
                    component={PeopleScreen}
                    options={{
                        drawerIcon: () => ( <Ionicons name="people-outline" size={iconFontSmall} color={grey} />),
                        headerRight: () => ( <HeaderRightScreen />)
                    }}
                />
                <Drawer.Screen
                    name="Form"
                    component={FormScreen}
                    options={{
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name="Form2"
                    component={Form2Screen}
                    options={{
                        title: ''
                    }}
                />
            </Drawer.Navigator>
        </>
    );
}

export default LeftNavDrawer;