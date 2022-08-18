import AsyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {getCurrentDate} from "./index";

const NOTIFICATION = '@NOTIFICATION';

const storeData = async (value) => {
    try {
        const data = {date: getCurrentDate() + '', text: value};
        console.log(data);
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem(Math.random().toString(), jsonValue)
    } catch (e) {
        console.log('Saving error');
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(NOTIFICATION)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log('Error reading value');
    }
}

export {
    storeData,
    getData,
    NOTIFICATION
}