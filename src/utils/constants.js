export const REACT_APP_CONTACT_CREATE='CONTACT_CREATE'
export const REACT_APP_CONTACT_UPDATE='CONTACT_UPDATE'
export const REACT_APP_CONTACT_DELETE='CONTACT_DELETE'
export const REACT_APP_CONTACT_GET_INIT_DATA='CONTACT_GET_INIT_DATA'
export const REACT_APP_CONTACT_GET_FILTER_DATA='CONTACT_GET_FILTER_DATA'
export const REACT_APP_CONTACT_ENABLE_DELETE=false
export const REACT_APP_FIREBASE_URL='https://contact-manager-f189f-default-rtdb.firebaseio.com/'

const listAvata = [
    {title: 'Avata M1', image: require('../../assets/images/img0.jpg')},
    {title: 'Avata F1', image: require('../../assets/images/img1.jpg')},
    {title: 'Avata M2', image: require('../../assets/images/img2.jpg')},
    {title: 'Avata M3', image: require('../../assets/images/img3.jpg')},
    {title: 'Avata F2', image: require('../../assets/images/img4.jpg')},
    {title: 'Avata F3', image: require('../../assets/images/img5.jpg')},
    {title: 'Avata M4', image: require('../../assets/images/img6.jpg')},
    {title: 'Avata F4', image: require('../../assets/images/img7.jpg')}
];

const listPosition = [
    {title: 'Web Designer'},
    {title: 'UI Designer'},
    {title: 'Senior full stack engineer'},
    {title: 'Software engineer frontend'},
    {title: 'Senior Software Engineer'},
    {title: 'Software engineer backend'},
    {title: 'Android developer'},
    {title: 'Project coordinator'},
    {title: 'Mobile Software Engineer'},
];

const listCity = [
    {title: 'Ukraine, Kyiv', image: require('../../assets/images/flag_ukraine.png')},
    {title: 'Ukraine, Kharkiv', image: require('../../assets/images/flag_ukraine.png')},
    {title: 'Ukraine, Odessa', image: require('../../assets/images/flag_ukraine.png')},
    {title: 'Ukraine, Dnipro', image: require('../../assets/images/flag_ukraine.png')},
    {title: 'Ukraine, Lviv', image: require('../../assets/images/flag_ukraine.png')},
    {title: 'Cambodia, Phnom Penh', image: require('../../assets/images/flag_cambodia.png')}
];

const getURLAvataProfile = 'https://react-js-app-seng.000webhostapp.com/avata/';

const defaultContact = {
    avata: '',
    name: '',
    company: '',
    isFavorite: false,
    isContact: false,
    position: '',
    city: '',
    social_networks: {
        facebook:'',
        instagram:'',
        twitter:'',
        youtube:''
    }
}

export {
    listAvata,
    listPosition,
    listCity,
    defaultContact,
    getURLAvataProfile
}