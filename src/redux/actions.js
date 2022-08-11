import * as React from "react";

import {
    REACT_APP_CONTACT_CREATE,
    REACT_APP_CONTACT_DELETE,
    REACT_APP_CONTACT_GET_FILTER_DATA,
    REACT_APP_CONTACT_GET_INIT_DATA,
    REACT_APP_CONTACT_UPDATE
} from "../utils/constants";

export const getInitData = (contacts) => {
    console.log('getInitData');
    return {
        type: REACT_APP_CONTACT_GET_INIT_DATA,
        payload: contacts,
    };
};

export const createContact = (data) => {
    return {
        type: REACT_APP_CONTACT_CREATE,
        payload: {data: data}
    };
};

export const updateContact = (index, data) => {
    return {
        type: REACT_APP_CONTACT_UPDATE,
        payload: {index: index, data: data}
    };
};

export const deleteContact = (index) => {
    return {
        type: REACT_APP_CONTACT_DELETE,
        payload: {index: index}
    };
};

export const getFilterData = (payload) => {
    return {
        type: REACT_APP_CONTACT_GET_FILTER_DATA,
        payload: payload
    };
}