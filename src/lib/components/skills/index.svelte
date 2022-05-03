<script lang="ts">
	import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
	import { skills } from '$lib/constants/skills';
	import Skill from './Skill.svelte';
</script>

<SectionsCommon title="Professional Skills">
	{#each skills as [icon, title, color], i}
		<Skill {...{ icon, title, color }} />
	{/each}
</SectionsCommon>
