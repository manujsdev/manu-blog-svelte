<script lang="ts">
	import AboutMeButton from './AboutMeButton.svelte';
</script>

<div class="intro-index">
	<span>Hello. I'm Manu.</span>
	<p>
		I'm a Developer Front-End with more than 9 years of experience in high-impact environments with very good results.
	</p>
	<AboutMeButton />
</div>

<style>
	.intro-index {
		padding-top: 20vh;
		display: flex;
		flex-direction: column;
	}

	.intro-index > span {
		font-size: 1.38em;
	}

	@media (min-width: 768px) {
		.intro-index > span {
			font-size: 1.48em;
		}
		.intro-index > p {
			font-size: 1.24em;
		}
	}

	@media (min-width: 1024px) {
		.intro-index > span {
			font-size: 1.6em;
		}
		.intro-index > p {
			font-size: 1.3em;
			max-width: 26em;
		}
	}

	@media (min-width: 1440px) {
		.intro-index > span {
			font-size: 2.3em;
		}
		.intro-index > p {
			font-size: 1.7em;
		}
	}
</style>
