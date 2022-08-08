import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {grey} from "../utils/Styles";
import * as React from "react";
import {useNavigation} from "@react-navigation/native";

const SearchScreen = () => {
    const navigation = useNavigation();
    return (
       <>
           <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, width: '90%'}}>
               <TouchableOpacity
                   onPress={() => {
                       navigation.navigate({
                           name: 'Home',
                       });
                   }}
                   underlayColor='#042417'>
                   <Ionicons name="chevron-back" size={30} color={grey} />
               </TouchableOpacity>
               <TextInput placeholder="Search" style={{
                   width: '100%',
                   borderColor: '#c6c6c6',
                   borderWidth: 1,
                   borderRadius: 8,
                   paddingLeft: 10
               }} />
           </View>
       </>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginRight: 5
    },
    searchContainer: {
        flexDirection: 'row',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginTop: 0
    },
    item: {
        backgroundColor: "#f5f520",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    btnClickContain: {
    },
    btnContainer: {
        marginRight: 10
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    }
});