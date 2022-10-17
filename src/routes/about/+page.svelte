<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import ContactSocials from '$lib/components/contactSocials/index.svelte';
  import website from '$lib/config/website';
  import type { EntityMetaType } from '$lib/types';
  import { defaultTimeToRead, FAVICONSIZE } from '$lib/constants';
  import { _ } from 'svelte-i18n';

  const { author, siteUrl } = website;
  let title = 'About me';
  let metadescription = 'manujsdev`s portfolio: this is my postfolio. I show you who I am';
  const entityMeta: EntityMetaType = {
    ...FAVICONSIZE,
    url: `${siteUrl}/`,
    caption: author
  };
  const seoProps = {
    title,
    entityMeta,
    metadescription,
    slug: 'about',
    timeToRead: defaultTimeToRead
  };
</script>

<SEO {...seoProps} />

<div class="mx-0 mt-0 mb-3">
  <div class="flex flex-col pt-11">
    <span class="text-lg font-bold">{$_('home.hello')}</span>
    <h3>{$_('aboutMe.developer')}</h3>
    <div class="flex flex-col my-8 mx-0">
      <ContactSocials icon="﯉" value="manujsdev@gmail.com" />
    </div>
  </div>
  <p>{$_('aboutMe.paragraphOne')}{' '}</p>
  <p>{$_('aboutMe.paragraphTwo')}</p>
  <p>{$_('aboutMe.paragraphThree')}</p>
  <p>{$_('aboutMe.paragraphFour')}</p>
</div>

<style>
  p {
    font-size: 1.443em;
    max-width: 75ch;
    margin: 1em;
  }
</style>
