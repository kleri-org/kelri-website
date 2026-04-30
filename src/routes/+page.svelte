<script lang="ts">
	import { ShineBorder } from '$lib/components/magic/shine-border';
</script>

<main class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<div class="flex max-w-md flex-col items-center gap-8">
		<div class="relative flex items-center justify-center rounded-2xl p-5">
			<ShineBorder
				glow
				borderWidth={10}
				duration={5}
				shineColor={['#196072', '#84ccb8', '#239190', '#84ccb8', '#196072']}
			/>
			<img
				src="/cleri_logo.svg"
				alt="Kleri logo"
				class="relative h-32 w-32 rounded-2xl"
			/>
		</div>

		<div class="flex flex-col items-center gap-3">
			<h1
				class="bg-gradient-to-r from-cleri-green-2 via-cleri-green-3 to-cleri-green-1 bg-clip-text text-5xl font-bold tracking-tight text-transparent"
			>
				Kleri
			</h1>
			<p class="font-mono text-sm tracking-wide text-cleri-green-2/80">
				Something fresh is growing.
			</p>
		</div>

		<div
			class="inline-flex items-center gap-2 rounded-full border border-cleri-green-3/30 bg-cleri-green-1/10 px-4 py-2 font-mono text-xs text-cleri-green-2"
		>
			<span class="relative flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cleri-green-2 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-cleri-green-2"></span>
			</span>
			Coming soon
		</div>
	</div>

	<footer class="absolute bottom-6 font-mono text-xs text-foreground/30">
		© {new Date().getFullYear()} Kleri
	</footer>
</main>
