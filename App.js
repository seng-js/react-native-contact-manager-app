import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList,} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import PeopleScreen from './screens/PeopleScreen';
import CompanyScreen from './screens/CompanyScreen';
import {AntDesign, MaterialIcons, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function LeftNavDrawer() {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: () => ( <Ionicons name="home" size={24} color="green" />)
                }}
            />
            <Drawer.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    drawerIcon: () => ( <AntDesign name="contacts" size={24} color="green" />)
                }}
            />
            <Drawer.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    drawerIcon: () => ( <MaterialIcons name="favorite" size={24} color="green" />)
                }}
            />
            <Drawer.Screen
                name="People"
                component={PeopleScreen}
                options={{
                    drawerIcon: () => ( <Ionicons name="people" size={24} color="green" />)
                }}
            />
            <Drawer.Screen
                name="Company"
                component={CompanyScreen}
                options={{
                    drawerIcon: () => ( <MaterialCommunityIcons name="office-building" size={24} color="green" />)
                }}
            />

        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <LeftNavDrawer />
        </NavigationContainer>
    );
}