import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList,} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import PeopleScreen from './screens/PeopleScreen';
import CompanyScreen from './screens/CompanyScreen';
import {AntDesign, MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome} from "@expo/vector-icons";
import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";

const HeaderProfile = () => {
    return (
        <ImageBackground source={require('./assets/images/menu-bg.jpeg')} style={{padding: 20}}>
            <Image source={require('./assets/images/img4.jpg')} style={{
                height: 80, width: 80, borderRadius: 40, marginBottom: 10
            }} />
            <Text style={{color: '#fff', fontSize: 18}}>John Doe</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="favorite" size={24} color="red" />
                    <Text style={{color: '#fff'}}>5 Favorites</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign name="contacts" size={24} color="green" />
                    <Text style={{color: '#fff'}}>5 Contacts</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

function CustomDrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#8200d6'}}>
                <HeaderProfile />
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                    <DrawerItem label="Help" onPress={() => alert('Link to help')} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome name="sign-out" size={22} color="black" />
                        <Text style={{fontSize: 15, marginLeft: 5}}>Sign out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function LeftNavDrawer() {
    const fontSize = 24;
    const fontColor = 'grey';
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                marginLeft: -15}
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: () => ( <Ionicons name="home-outline" size={fontSize} color={fontColor} />)
                }}
            />
            <Drawer.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    drawerIcon: () => ( <AntDesign name="contacts" size={fontSize} color={fontColor} />)
                }}
            />
            <Drawer.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    drawerIcon: () => ( <MaterialIcons name="favorite-outline" size={fontSize} color={fontColor} />)
                }}
            />
            <Drawer.Screen
                name="People"
                component={PeopleScreen}
                options={{
                    drawerIcon: () => ( <Ionicons name="people-outline" size={fontSize} color={fontColor} />)
                }}
            />
            <Drawer.Screen
                name="Company"
                component={CompanyScreen}
                options={{
                    drawerIcon: () => ( <MaterialCommunityIcons name="office-building-outline" size={fontSize} color={fontColor} />)
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