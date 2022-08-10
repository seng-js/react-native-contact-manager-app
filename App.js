import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LeftNavDrawer from "./src/screens/LeftNavDrawer";

export default function App() {
    return (
        <NavigationContainer>
            <LeftNavDrawer />
        </NavigationContainer>
    );
}