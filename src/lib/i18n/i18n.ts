import { init, locale, register } from 'svelte-i18n';
import { derived } from 'svelte/store';

register('en', () => import('./en'));
register('es', () => import('./es'));

export function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
  locale.set(_locale);
  console.log('set locale');
  init({
    fallbackLocale: _locale
  });
}
export const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');
export const myLocale = () => {
  let newLocale = null;
  locale.subscribe(value => (newLocale = value));
  return newLocale;
};
