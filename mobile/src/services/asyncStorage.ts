import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_KEY = "@clima-data";
const LOGGED_KEY = "@clima-user";

export const storeData = async (value: object, key = DATA_KEY) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export const getData = async (key = DATA_KEY) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

export const storeLoggedUser = async (value: object) => {
  try {
    await storeData(value, LOGGED_KEY);
  } catch (e) {}
};

export const getLoggedUser = async () => {
  try {
    const loggedUser = await getData(LOGGED_KEY);
    return loggedUser;
  } catch (e) {}
};

export const removeLoggedUser = async () => {
  try {
    await AsyncStorage.removeItem(LOGGED_KEY);
  } catch (e) {}
};
