<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
	import { qualifications } from '$lib/constants/coreQualifications';
	import Toolbox from '$lib/components/toolbox/index.svelte'
</script>

<div transition:fly={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>
	<SectionsCommon title="Core Qualifications">
		{#each qualifications as [icon, text], i}
			<Toolbox {...{ icon, text }} />
		{/each}
	</SectionsCommon>
</div>
