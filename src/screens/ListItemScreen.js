import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../utils/Colors";
import {getURLAvataProfile} from "../utils/constants";


const ListItemScreen = () => {
    const data = [
        {
            "avatar":getURLAvataProfile + "img0.jpg",
            "city":"Ukraine, Kharkiv",
            "company":"Logical",
            "id":2,
            "isContact":false,
            "isFavorite":false,
            "name":"Elizabeth Marks",
            "position":"UI Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        },
        {
            "avatar":getURLAvataProfile + "img1.jpg",
            "city":"Ukraine, Kyiv",
            "company":"Logical",
            "id":1,
            "isContact":false,
            "isFavorite":false,
            "name":"Jonathan Thomas",
            "position":"Web Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        },
        {
            "avatar":getURLAvataProfile + "img3.jpg",
            "city":"Ukraine, Odessa",
            "company":"HandyCode",
            "id":3,
            "isContact":false,
            "isFavorite":false,
            "name":"Carlos Moreno",
            "position":"UI Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        },
        {
            "avatar":getURLAvataProfile + "img4.jpg",
            "city":"Ukraine, Dnipro",
            "company":"PerfectCode",
            "id":4,
            "isContact":false,
            "isFavorite":false,
            "name":"Charles Tapia",
            "position":"Web Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        },
        {
            "avatar":getURLAvataProfile + "img5.jpg",
            "city":"Ukraine, Lviv",
            "company":"PerfectCode",
            "id":5,
            "isContact":false,
            "isFavorite":false,
            "name":"Jennifer Warner",
            "position":"UI Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        },
        {
            "avatar":getURLAvataProfile + "img6.jpg",
            "city":"Ukraine, Lviv",
            "company":"Logical",
            "id":6,
            "isContact":false,
            "isFavorite":false,
            "name":"Andrew Neil",
            "position":"Web Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        },
        {
            "avatar":getURLAvataProfile + "img7.jpg",
            "city":"Ukraine, Lviv",
            "company":"Logical",
            "id":7,
            "isContact":true,
            "isFavorite":true,
            "name":"Amanda Jacobs",
            "position":"UI Designer",
            "social_networks":{
                "facebook":"",
                "instagram":"",
                "twitter":"",
                "youtube":""
            }
        }
    ];

    return (
        <FlatList
            style={styles.container}
            enableEmptySections={true}
            data={data}
            keyExtractor= {(item) => {
                return item.id;
            }}
            renderItem={({item}) => {
                return (
                    <View style={styles.box}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={styles.image} source={{uri:item.avatar}} />
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
                                <MaterialCommunityIcons name="account-edit-outline" size={22} color="black" />
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

export default ListItemScreen;

const styles = StyleSheet.create({
    box: {
        marginBottom: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height:1,
            width:-2
        },
        elevation:2,
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkBlue,
        paddingBottom: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 20,
        padding: 6,
        marginTop: 5
    },
    buttonTextAction: {
        fontSize: 10,
        textTransform: 'capitalize'

    },
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingTop:20,
    },
    icon:{
        width:30,
        height:30
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop:10
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconFonts: {
        color: 'gray',
    },
    red: {
        color: '#FF4500',
    }
});