import {REACT_JS_APP_URl} from "@env";

export const useGetAssetUrls = () => {
    const AVATAR_URL_PROFILE = REACT_JS_APP_URl + '/avatar/';
    const IMAGE_URL = REACT_JS_APP_URl + '/img/';

    return {AVATAR_URL_PROFILE, IMAGE_URL}
}
