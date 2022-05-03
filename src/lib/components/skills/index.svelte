<script lang="ts">
	import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
	import { skills } from '$lib/constants/skills';
	import Skill from './Skill.svelte';
</script>

<SectionsCommon title="Professional Skills">
	<div class="section-items">
		{#each skills as [icon, title, color], i}
			<Skill {...{ icon, title, color }} />
		{/each}
	</div>
</SectionsCommon>

<style>
	.section-items {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
