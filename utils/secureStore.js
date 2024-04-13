import * as SecureStore from "expo-secure-store";

export async function secureSave(key, value) {
	await SecureStore.setItemAsync(key, value);
}

export async function getSecureValueAsync(key) {
	let result = await SecureStore.getItemAsync(key);
	if (result) {
		return result;
	} else {
		return null;
	}
}

export function getSecureValue(key) {
	return SecureStore.getItem(key);
}
