<script lang="ts">
	import Tailwindcss from "./Tailwindcss.svelte"
	import Wave from "./Wave.svelte"
	import { data, Fact } from "./data"

	interface IndexedFact {
		index: number,
		fact: Fact
	}

	/**
	 * Retrieve a random piece of data from the [data] array
	 */
	const randomFact = (): IndexedFact => {
		const index = Math.floor(Math.random() * data.length)

		return { index, fact: data[index] }
	}

	const getHash = (): number | null => {
		const int = parseInt(location.hash.substring(1))

		if (Number.isNaN(int)) return null

		return int;
	}

	const grabHash = (): IndexedFact => {
		const hashNumber = getHash()

		return hashNumber != null ? { index: hashNumber, fact: data[hashNumber] } : randomFact()
	}

	let currentFact: IndexedFact = grabHash()
</script>
<Tailwindcss/>

<svelte:window on:popstate={() => currentFact = grabHash()}/>
<main class="fixed text-center text-sky-900 text-2xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
	<div class="my-1">
		{#each currentFact.fact.categories as category}
			<span class="text-sm max-w-min px-2 uppercase font-thin py-1 rounded-md bg-slate-700 mx-5 mb-5 text-white shadow-md">{category}</span>
		{/each}
	</div>
	<p class="border-b-2 border-sky-500 py-4 text-shadow-sm mb-4">{currentFact.fact.value}</p>
	<button class="bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700 px-5 py-2 text-lg leading-5 rounded-full font-semibold text-white shadow-md hover:shadow-lg focus:shadow-sm" on:click={() => {
		currentFact = randomFact()
		history.pushState({}, "", "#" + currentFact.index)
	}}>New Random Ocean Fact</button>
</main>
<Wave/>