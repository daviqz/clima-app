import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@clima-data";

export const storeData = async (value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(KEY, jsonValue);
  } catch (e) {}
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};
