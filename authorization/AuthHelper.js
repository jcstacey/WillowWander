import * as Crypto from "expo-crypto";

var Buffer = require("buffer/").Buffer;

export const generateRandomString = (length) => {
	const possible =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const values = Crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

export const sha256 = async (data) => {
	return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, data);
};

export const base64encode = (input) => {
	return Buffer.from(input).toString("base64");
};

export const createCodeChallenge = async () => {
	const codeVerifier = generateRandomString(64);
	const hashed = await sha256(codeVerifier);
	return base64encode(hashed); // Code Challenge
};
