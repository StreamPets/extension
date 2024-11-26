import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

interface Receipt {}

export const postBuyItem = async (receipt: Receipt, token: string, colorId: string) => {
	await api.post(
		"/store",
		{
			receipt: receipt,
			color_id: colorId,
		},
		{
			headers: { "x-extension-jwt": token },
		},
	);
};

export const getUserData = async (token: string) => {
	const { data: userData } = await api.get("/user", {
		headers: { "x-extension-jwt": token },
	});
	return userData;
};

export const putColor = async (colorId: string, token: string) => {
	await api.put(
		"/colors",
		{ color_id: colorId },
		{
			headers: { "x-extension-jwt": token },
		},
	);
};

export const getStoreItems = async (token: string) => {
	const {
		data: { colors },
	} = await api.get("/store", {
		headers: { "x-extension-jwt": token },
	});
	return colors;
};

export const getOverlayUrl = async (token: string) => {
	const { data: overlayUrl } = await api.get("/overlayUrl", {
		headers: { "x-extension-jwt": token },
	});
	return overlayUrl;
};
