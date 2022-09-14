import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { init, locale, register } from 'svelte-i18n';
import { setupI18n } from '$lib/i18n/i18n';

export const load: PageLoad = async () => {
  console.log('set locale in layout BE');
  setupI18n({ withLocale: 'en' });

  return {
    locale: true
  };
  //   throw error(404, 'Not found');
};
