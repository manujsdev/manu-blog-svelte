<script lang="ts">
	import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
	import { qualifications } from '$lib/constants/coreQualifications';
	import Toolbox from '$lib/components/toolbox/index.svelte';
</script>

<SectionsCommon title="Core Qualifications">
	{#each qualifications as [icon, text], i}
		<Toolbox {...{ icon, text }} />
	{/each}
</SectionsCommon>
