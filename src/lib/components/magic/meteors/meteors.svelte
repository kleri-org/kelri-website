<script lang="ts">
	import { onMount } from "svelte";

	interface Props {
		number?: number;
	}

	interface Styles {
		top: number;
		left: string;
		animationDelay: string;
		animationDuration: string;
		tailWidth: string;
	}

	let meteorStylesLeft: Styles[] = $state([]);

	let changeMeteorsLeft = (num: number) => {
		meteorStylesLeft = [];
		const styles = [...new Array(num)].map(() => ({
			top: -3,
			left: `${Math.floor(Math.random() * -2000)}px`,
			animationDelay: `${Math.random() * 8 + 0.2}s`,
			animationDuration: `${Math.floor(Math.random() * 8 + 2.9)}s`,
			tailWidth: `${Math.floor(Math.random() * 70 + 40)}px`,
		}));
		meteorStylesLeft = styles;
	};

	let meteorStylesRight: Styles[] = $state([]);

	let changeMeteorsRight = (num: number) => {
		meteorStylesRight = [];
		const styles = [...new Array(num)].map(() => ({
			top: -3,
			left: `${Math.floor(Math.random() * 2000)}px`,
			animationDelay: `${Math.random() * 8 + 0.2}s`,
			animationDuration: `${Math.floor(Math.random() * 8 + 2.9)}s`,
			tailWidth: `${Math.floor(Math.random() * 70 + 40)}px`,
		}));
		meteorStylesRight = styles;
	};

	onMount(() => {
		changeMeteorsLeft(number);
		changeMeteorsRight(number);
	});

	let { number = 100 }: Props = $props();
</script>

{#each meteorStylesLeft as style, idx}
	<span
		id="meteor-left-{idx}"
		class="pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] rotate-180 animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
		style="top: {style.top}px; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration};"
	>
		<!-- Meteor Tail -->
		<div
			class="pointer-events-none absolute -z-10 h-px bg-linear-to-r from-cleri-green-2 via-cleri-green-1 to-transparent"
			style="width: {style.tailWidth};"
		></div>
	</span>
{/each}

{#each meteorStylesRight as style, idx}
	<span
		id="meteor-right-{idx}"
		class="pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] rotate-180 animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
		style="top: {style.top}px; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration};"
	>
		<!-- Meteor Tail -->
		<div
			class="pointer-events-none absolute -z-10 h-px bg-linear-to-r from-cleri-green-2 via-cleri-green-1 to-transparent"
			style="width: {style.tailWidth};"
		></div>
	</span>
{/each}
