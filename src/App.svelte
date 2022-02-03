<script lang="ts">
	import Tailwindcss from "./Tailwindcss.svelte"
	import { data, Fact } from "./data"

	/**
	 * Retrieve a random piece of data from the [data] array
	 */
	const randomFact = (): [Fact, number] => {
		const index = Math.floor(Math.random() * data.length)

		return [data[index], index];
	}

	const getHash = (): number | null => {
		try {
			return parseInt(location.hash.substring(1))
		} catch (e) {
			return null
		}
	}

	let currentFact: [Fact, number] = getHash() != null ? [data[getHash()], getHash()] : randomFact()
	$: location.hash = currentFact[1]
</script>

<Tailwindcss/>
<main class="fixed text-center text-sky-900 text-2xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
	<p class="border-b-2 border-sky-500 py-4 text-shadow-sm">{currentFact[0].value}</p>
	<div class="my-5">
		{#each currentFact[0].categories as category}
			<span class="text-sm max-w-min px-3 py-2 rounded-md bg-slate-700 mx-5 text-white shadow-md">{category}</span>
		{/each}
	</div>
	<button class="bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700 px-5 py-2 text-lg leading-5 rounded-full font-semibold text-white shadow-md hover:shadow-lg focus:shadow-sm" on:click={() => currentFact = randomFact()}>New Random Ocean Fact</button>
</main>