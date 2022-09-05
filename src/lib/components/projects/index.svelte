<script lang="ts">
  import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
  import Toolbox from '$lib/components/toolbox/index.svelte';
  import ExtraData from './ExtraData.svelte';
  import { projects } from '$lib/constants/projects';
</script>

<SectionsCommon title="Projects (Creator/Collaborator)">
  {#each projects as [icon, text, description, link, iconOrTextLink]}
    <Toolbox
      {icon}
      {text}
      {link}
      {iconOrTextLink}
      width={'16rem'}
      extra={ExtraData}
      extraProps={{ extraData: description }}
      target="_blank"
    />
  {/each}
</SectionsCommon>
