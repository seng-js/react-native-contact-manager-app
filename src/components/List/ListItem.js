import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import {getURLAvataProfile} from "../../utils/constants";
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";

const ListItem = () => {
    const navigation = useNavigation();
    const state = useSelector(state => state);
    const contacts = state.contacts;

    return (
        <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={contacts}
            keyExtractor= {(item) => {
                return item.id;
            }}
            renderItem={({item}) => {
                return (
                    <View style={styles.box}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.image} source={{uri: getURLAvataProfile + item.avatar.replace('img/', '')}} />
                            <Text style={styles.company}>{item.company}</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.position}>{item.position}</Text>
                                <Text style={styles.city}>{item.city}</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name='facebook'
                                        style={{color: Colors.darkBlue, fontSize: 22, marginRight: 10}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name='instagram'
                                        style={{color: Colors.darkBlue, fontSize: 22, marginRight: 10}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name='twitter'
                                        style={{color: Colors.darkBlue, fontSize: 22, marginRight: 10}}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        name='youtube'
                                        style={{color: Colors.darkBlue, fontSize: 22, marginRight: 10}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonTextAction}>ADD TO CONTACTS</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonTextAction}>DELETE FROM CONTACTS</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate({
                                    name: 'Form',
                                    params: item
                                })}>
                                    <MaterialCommunityIcons style={styles.buttonEditAction} name="account-edit-outline" size={22} color="black" />
                                </TouchableOpacity>
                            </View>
                            {/*<View style={styles.buttonContainer}>*/}
                            {/*    <Text style={styles.buttonTextAction}>ADD TO FAVORITES</Text>*/}
                            {/*</View>*/}
                            {/*<View style={styles.buttonContainer}>*/}
                            {/*    <Text style={styles.buttonTextAction}>DELETE FROM FAVORITES</Text>*/}
                            {/*</View>*/}
                        </View>
                    </View>
                )
            }}/>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    box: {
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height:1,
            width:-2
        },
        elevation:2,
        paddingBottom: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5,
        borderColor: Colors.darkBlue,
    },
    buttonTextAction: {
        fontSize: 10,
        color: Colors.darkBlue,
        textTransform: 'capitalize',
    },
    buttonEditAction: {
        fontSize: 16,
        color: Colors.darkBlue,
    },
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingTop:10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 10
    },
    info: {
        flexDirection: 'column'
    },
    name: {
        fontSize: 12,
        marginTop: 5,
        color: '#333',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    position: {
        fontSize: 12,
        marginTop: 5,
        color: '#333',
        textAlign: 'left'
    },
    company: {
        fontSize: 12,
        marginTop: 5,
        color: '#333',
        textAlign: 'left'
    },
    city: {
        fontSize: 12,
        marginTop: 5,
        color: '#333',
        textAlign: 'left',
        paddingBottom: 5
    },
    iconContainer: {
        flexDirection: 'row',
    }
});