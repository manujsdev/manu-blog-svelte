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

<div class="container">
  <div class="intro">
    <span class="my-name">{$_('home.hello')}</span>
    <h3>{$_('aboutMe.developer')}</h3>
    <div class="socials">
      <ContactSocials icon="﯉" value="manujsdev@gmail.com" />
    </div>
  </div>
  <p>{$_('aboutMe.paragraphOne')}{' '}</p>
  <p>{$_('aboutMe.paragraphTwo')}</p>
  <p>{$_('aboutMe.paragraphThree')}</p>
  <p>{$_('aboutMe.paragraphFour')}</p>
</div>

<style>
  .container {
    margin: 0 0 10px 0;
  }
  .intro {
    display: flex;
    flex-direction: column;
    padding-top: 44px;
  }

  .my-name {
    font-size: 1.78em;
    font-weight: bold;
  }

  p {
    font-size: 1.443em;
    max-width: 75ch;
    margin: 1em;
  }

  .socials {
    margin: 3em 0;
    display: flex;
    flex-direction: column;
  }
</style>
