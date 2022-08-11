import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import SocialList from "./SocialList";
import ListAction from "./ListAction";
import {getAvatarProfileURL} from "../../utils";

const ListItem = ({data}) => {
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
                        <View style={styles.profile}>
                            <Image style={styles.image} source={{uri: getAvatarProfileURL(item.avatar)}} />
                            <Text style={styles.company}>{item.company}</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.position}>{item.position}</Text>
                                <Text style={styles.city}>{item.city}</Text>
                            </View>
                            <SocialList item={item} />
                        </View>
                        <ListAction item={item} />
                    </View>
                )
            }}/>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    }
});