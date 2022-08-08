import * as React from "react";
import LayoutScreen from "./LayoutScreen";

const HomeScreen = ({navigation}) => {
    //console.log(props.isShow);
     return (
        <LayoutScreen name="Home" navigation={navigation}/>
    );
}

export default HomeScreen;