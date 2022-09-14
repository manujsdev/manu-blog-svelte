<script lang="ts">
  import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
  import Toolbox from '$lib/components/toolbox/index.svelte';
  import ExtraData from './ExtraData.svelte';
  import { projects } from '$lib/constants/projects';
  import { _ } from 'svelte-i18n';
</script>

<SectionsCommon title={$_('home.projects.title')}>
  {#each projects as [icon, text, description, link, iconOrTextLink]}
    <Toolbox
      {icon}
      {text}
      {link}
      {iconOrTextLink}
      width={'16rem'}
      extra={ExtraData}
      extraProps={{ extraData: $_(description) }}
      target="_blank"
    />
  {/each}
</SectionsCommon>
