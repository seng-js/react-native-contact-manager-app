import {Text, View} from "react-native";
import * as React from "react";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {grey, iconFontSmall} from "../utils/Styles";

const HeaderScreen = (props) => {
     return (
         <>
             <View style={{
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 marginBottom: 10
             }}>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                     {(() => {
                         switch (props.title) {
                             case "Favorite": return <MaterialIcons name="favorite-outline" size={iconFontSmall} color={grey} />;
                             case "Contact": return <AntDesign name="contacts" size={iconFontSmall} color={grey} />;
                             case "People": return <Ionicons name="people-outline" size={iconFontSmall} color={grey} />;
                             default: return <Ionicons name="people-outline" size={iconFontSmall} color={grey} />
                         }
                     })()}
                     <Text>10</Text>
                 </View>
             </View>
         </>
    );
}

export default HeaderScreen;