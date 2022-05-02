import type { AppStoreType } from '$lib/types';
import { writable } from 'svelte/store';

const obj: AppStoreType = {
	onScrolling: false
};

export const AppStore = writable<AppStoreType>(obj);
