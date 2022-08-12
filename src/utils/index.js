import {AVATA_URL_PROFILE, listAvata, listCity, listPosition} from "./Constants";

const isValidInput = (filterByData) => {
    return filterByData !== undefined && filterByData.length > 0
}

const isFilterByName = (filterByName, contact) => {
    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()} ${contact.city.toLowerCase()}`;
    return fullSearchQuery.toLowerCase().includes(filterByName.toLowerCase());
}

const getAvatarProfileURL = (avatar) => {
    return AVATA_URL_PROFILE + avatar.replace('img/', '')
}

const getSelectedIndexProfile = (profile) => {
    let selectedIndex = 0;
    if (profile !== undefined) {
        selectedIndex = listAvata.findIndex(item => {
            return item.image === profile.replace('img/', '');
        });
    }
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
    isFilterByName,
    getAvatarProfileURL,
    getSelectedIndexProfile,
    getSelectedIndexPosition,
    getSelectedIndexCity
}