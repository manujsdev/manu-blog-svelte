<script lang="ts">
	export let link: string | undefined = undefined;
	export let iconOrTextLink: string | undefined = undefined;
</script>

<a class="link" target="_blank" href={link}>{iconOrTextLink}</a>

<style>
	.link {
		color: var(--theme-text);
		text-decoration: none;
		transition: all 0.3s ease 0s;
		font-size: 1.145em;
	}

	@media (min-width: 768px) {
		.link {
			font-size: 1.5em;
		}
	}

	@media (min-width: 1920px) {
		.link {
			font-size: 18px;
		}
	}
</style>
