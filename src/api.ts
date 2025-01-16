import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export const getUserData = async (token: string) => {
	const { data: userData } = await api.get("/extension/user", {
		headers: { "x-extension-jwt": token },
	});
	return userData;
};

export const getStoreItems = async (token: string) => {
	const { data: items } = await api.get("/extension/items", {
		headers: { "x-extension-jwt": token },
	});
	return items;
};

export const postBuyItem = async (receipt: string, token: string, itemId: string) => {
	await api.post(
		"/extension/items",
		{
			receipt: receipt,
			item_id: itemId,
		},
		{
			headers: { "x-extension-jwt": token },
		},
	);
};

export const putItem = async (itemId: string, token: string) => {
	await api.put(
		"/extension/items",
		{ item_id: itemId },
		{
			headers: { "x-extension-jwt": token },
		},
	);
};

// TODO: Create endpoint (will be fixed in next config PR)
export const getOverlayUrl = async (token: string) => {
	const { data: overlayUrl } = await api.get("/extension/overlayUrl", {
		headers: { "x-extension-jwt": token },
	});
	return overlayUrl;
};
