import * as React from "react";
import {useEffect, useState} from "react";
import {FlatList, StatusBar, Text, View, StyleSheet, Image} from "react-native";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {NOTIFICATION, REACT_JS_APP_URl} from "../utils/Constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../utils/Colors";
import moment from "moment/moment";

const NotificationScreen = () => {
    const [data, setData] = useState([]);
    const {getItem} = useAsyncStorage(NOTIFICATION);
    const [selectedId, setSelectedId] = useState(null);

    const getNotifications = async () => {
        try {
            let notifications = [];
            const item = await getItem();
            if (item) {
                notifications = JSON.parse(item);
            }
            notifications.sort((a, b) => {
                return b.date - a.date;
            });
            setData(notifications);
        } catch(e) {
            console.log('Error reading value');
        }
    }

    const Item = ({ item, textColor }) => (
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: Colors.white, marginBottom: 2, marginTop: 2, padding: 10}}>
            <View style={styles.imageContainer}>
                <Image source={{uri: REACT_JS_APP_URl + '/' + item.image}} style={styles.image} borderRadius={20} />
            </View>
            <View style={{flex: 1, flexDirection: 'column', marginLeft: 30}}>
                <View>
                    <Text style={[styles.title, textColor]}>{item.text}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialCommunityIcons name="update" size={20} color={Colors.darkBlue} />
                    <Text style={[styles.date, textColor]}>{moment(item.date).calendar()}</Text>
                </View>
            </View>
        </View>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    useEffect(() => {
        getNotifications();
    }, []);

     return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.date}
                extraData={selectedId}
            />
        </View>
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
        marginBottom: 6
    },
    date: {
        fontSize: 12,
        marginLeft: 8
    },
    imageContainer: {
        marginLeft: 30
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 30
    }
});