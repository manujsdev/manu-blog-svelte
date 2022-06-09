<script lang="ts">
	import { fade } from 'svelte/transition';
	import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
	import { skills } from '$lib/constants/skills';
	import Skill from './Skill.svelte';
</script>

<div transition:fade={{ delay: 250, duration: 300 }}>
	<SectionsCommon title="Professional Skills">
		{#each skills as [icon, title, color], i}
			<Skill {...{ icon, title, color }} />
		{/each}
	</SectionsCommon>
</div>
