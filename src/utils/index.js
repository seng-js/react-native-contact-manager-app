const getSetting = () => {
    return {
        "locationFilter": "img/location-filter.png"
    }
}

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

export {
    isValidInput,
    isFilterByLocation,
    isFilterByName,
    getLocationsByData,
    getSetting
}