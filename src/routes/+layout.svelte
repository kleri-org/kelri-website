<script lang="ts">
	import './layout.css';
	import { Meteors } from '$lib/components/magic/meteors';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/cleri_logo.svg" />
	<title>Kleri</title>
	<meta name="description" content="Kleri — coming soon." />
</svelte:head>

<div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
	<Meteors number={60} />
</div>

<div class="relative z-10">
	{@render children()}
</div>
