<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		borderWidth?: number;
		duration?: number;
		shineColor?: string | string[];
		glow?: boolean;
	}

	let {
		borderWidth = 1,
		duration = 14,
		shineColor = '#000000',
		glow = false,
		class: className,
		style,
		...restProps
	}: Props = $props();

	let computedStyle = $derived.by(() => {
		const colors = Array.isArray(shineColor) ? shineColor : [shineColor];
		const gradientColors = [...colors, colors[0]].join(',');

		if (glow) {
			const baseStyles = `
				--duration: ${duration}s;
				background-image: conic-gradient(from var(--angle), ${gradientColors});
				filter: blur(${borderWidth}px);
				opacity: 0.75;
			`;
			return style ? `${baseStyles} ${style}` : baseStyles;
		}

		const baseStyles = `
			--border-width: ${borderWidth}px;
			--duration: ${duration}s;
			background-image: conic-gradient(from var(--angle), ${gradientColors});
			mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			padding: var(--border-width);
		`;
		return style ? `${baseStyles} ${style}` : baseStyles;
	});
</script>

{#if glow}
	<div
		class="pointer-events-none absolute inset-0 rounded-[inherit] motion-safe:animate-shine-conic {className}"
		style={computedStyle}
		{...restProps}
	></div>
{:else}
	<div
		class="pointer-events-none absolute inset-0 rounded-[inherit] will-change-[background-image] motion-safe:animate-shine-conic {className}"
		style={computedStyle}
		{...restProps}
	></div>
{/if}
