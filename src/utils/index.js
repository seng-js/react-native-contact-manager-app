import {AVATA_URL_PROFILE, listAvata, listCity, listPosition} from "./constants";

const getLocationsByData = (data) => {
    let locations = data.map(item => item.city);
    return Array.from(new Set(locations));
}

const isValidInput = (filterByData) => {
    return filterByData !== undefined && filterByData.length > 0
}

const isFilterByLocation = (filterByLocation, contact) => {
    return contact.city.toLowerCase() === filterByLocation.toLowerCase();
}

const isFilterByName = (filterByName, contact) => {
    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()}`;
    return fullSearchQuery.toLowerCase().includes(filterByName.toLowerCase());
}

const getAvatarProfileURL = (avatar) => {
    return AVATA_URL_PROFILE + avatar.replace('img/', '')
}

const getSelectedIndexProfile = (profile) => {
    const selectedIndex = listAvata.findIndex(item => {
        return item.image === profile.replace('img/', '');
    });

    return selectedIndex;
}

const getSelectedIndexPosition = (position) => {
    const selectedIndex = listPosition.findIndex(item => {
        return item.title === position;
    });

    return selectedIndex;
}

const getSelectedIndexCity = (city) => {
    const selectedIndex = listCity.findIndex(item => {
        return item.title === city;
    });

    return selectedIndex;
}

export {
    isValidInput,
    isFilterByLocation,
    isFilterByName,
    getLocationsByData,
    getAvatarProfileURL,
    getSelectedIndexProfile,
    getSelectedIndexPosition,
    getSelectedIndexCity
}