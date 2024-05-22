const setTOLocalStorage = (key: string, value: any) => {
	if (!key || typeof window === 'undefined') {
		return;
	}
	localStorage.setItem(key, value);
};

const getFromLocalStorage = (key: string) => {
	if (!key || typeof window === 'undefined') {
		return;
	}
	return localStorage.getItem(key);
};

const removeFromLocalStorage = (key: string) => {
	if (!key || typeof window === 'undefined') {
		return;
	}
	localStorage.removeItem(key);
};

export { getFromLocalStorage, removeFromLocalStorage, setTOLocalStorage };
