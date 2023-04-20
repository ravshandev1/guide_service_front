export const LANGUAGE_NAME = "LANGUAGE_NAME";
export const LANGUAGE_ID = "LANGUAGE_ID";
export const CITY_ID = "CITY_ID";
export const LANG = "LANG";

export function getLang() {
    return localStorage.getItem(LANGUAGE_NAME);
}

export function getLang_id() {
    return localStorage.getItem(LANGUAGE_ID);
}

export function get_city_id() {
    return localStorage.getItem(CITY_ID);
}