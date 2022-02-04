<script lang="ts">

	// A css wave is a wave with 2x the size of the screen that can constantly loop

	// The height of the wave, in pixels.
	export let height = 100
	export let width = 400

	export let randomness = 0.1

	// The amount of random points on the wave
	export let points = 5

	const randomBetween = (min: number, max: number) => Math.floor(Math.random() * max) + min

	$: randomPoints = Array(points).fill({}).map((_, i) => ({
		x: (width / points) * i,
		y: randomBetween((height * 2) * -randomness, (height * 2) * randomness)
	}))

	// The smoothing 
	export let smoothingPointsPerPoint = 20
</script>

<svg class="fixed top-1/2 left-1/2 stroke-black fill-black stroke-1" {width} {height} xmlns="http://www.w3.org/2000/svg">
	{#each randomPoints as point, i}
		{#if randomPoints.length != i + 1}
			<path d="M {point.x} {point.y} L {randomPoints[i + 1].x} {randomPoints[i + 1].y}"/>
		{/if}
	{/each}
</svg>