import * as React from "react";
import axios from "axios";
import {createContact, deleteContact, getInitData, updateContact} from "./actions";
import {REACT_APP_FIREBASE_URL} from "../utils/constants";

const peopleUrl = REACT_APP_FIREBASE_URL + 'people';

export const getInitDataHandler = (dispatch) => {
    return axios.get(peopleUrl + '.json')
        .then((response) => {
            let contacts = [];
            Object.entries(response.data).forEach(([index, value]) => {
                contacts.push({ ...value, index });
            });
            dispatch(getInitData(contacts))
        }).catch((error) => {
            console.log('Error: ' + error);
        });
}

export const deleteDataHandler = (index, dispatch) => {
    axios.delete(peopleUrl + '/' + index + '.json').then(() => {
        dispatch(deleteContact(index))
    });
}

export const updateContactHandler = (type, action, index, dispatch) => {
    let data = {};
    const isAdd = action === 'add';
    if (type === 'favorite') {
        data = {'isFavorite': isAdd}
    } else if (type === 'contact') {
        data = {'isContact': isAdd}
        if (isAdd === false) {
            data = {'isContact': false, 'isFavorite': false}
        }
    }
    axios.patch(peopleUrl + '/' + index + '.json', data).then(() => {
        dispatch(updateContact(index, data))
    });
}

export const saveContactHandler = (data, dispatch) => {
    if (data.index === undefined) {
        axios.post(peopleUrl, data).then((response) => {
            if (response.data !== undefined) {
                data.index = response.data.name;
                dispatch(createContact(data))
            }
        });
    } else {
        axios.patch(peopleUrl + '/' + data.index + '.json', data).then(() => {
            dispatch(updateContact(data.index, data))
        });
    }
}