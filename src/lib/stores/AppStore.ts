import type { AppStoreType } from '$lib/types';
import { writable } from 'svelte/store';

const obj: AppStoreType = {
	onScrolling: false
};

function appStoreTwo() {
	const { subscribe, update } = writable<AppStoreType>(obj);
	return {
		subscribe,
		updateValue: (property: string, newValue: any) => update(value => ({ ...value, [property]: newValue }))
	};
}

export const appStore = appStoreTwo();
