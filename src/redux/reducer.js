import * as React from "react";
import {isFilterByLocation, isFilterByName, isValidInput} from "../utils";
import {
    REACT_APP_CONTACT_CREATE,
    REACT_APP_CONTACT_DELETE,
    REACT_APP_CONTACT_GET_FILTER_DATA,
    REACT_APP_CONTACT_GET_INIT_DATA,
    REACT_APP_CONTACT_UPDATE
} from "../utils/constants";


const initialState = {
    selectedFilterByName: '',
    selectedFilterByLocation: '',
    contacts: []
}

const reducer = (state = initialState, action) => {
    let contacts = [];
    let payload = action.payload;
    switch (action.type) {
        case REACT_APP_CONTACT_GET_INIT_DATA:
            return {
                ...state,
                contacts: payload,
                tempContacts: payload
            };
        case REACT_APP_CONTACT_CREATE:
            return {
                ...state,
                contacts: [...state.contacts, payload.data],
                tempContacts: state.contacts
            };
        case REACT_APP_CONTACT_UPDATE:
            contacts = state.contacts.map((contact) => {
                if (contact.index === payload.index) {
                    return {...contact, ...payload.data}
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts
            };
        case REACT_APP_CONTACT_DELETE:
            contacts = state.contacts.filter(contact => contact.index !== payload.index);
            return {
                ...state,
                contacts: contacts
            };
        case REACT_APP_CONTACT_GET_FILTER_DATA:
            if (isValidInput(payload.filterByLocation) &&
                isValidInput(payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByName(payload.filterByName, contact) &&
                        isFilterByLocation(payload.filterByLocation, contact);
                });
            } else if (isValidInput(payload.filterByLocation)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByLocation(payload.filterByLocation, contact);
                });
            } else if (isValidInput(payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByName(payload.filterByLocation, contact);
                });
            } else {
                contacts = state.tempContacts;
            }
            return {
                ...state,
                contacts,
                tempContacts: state.tempContacts,
                selectedFilterByName: payload.filterByName,
                selectedFilterByLocation: payload.filterByLocation
            };
        default:
            return {
                ...state,
                contacts: [],
                tempContacts:[]
            };
    }
}

export default reducer;