<script lang="ts">
	import Tailwindcss from "./Tailwindcss.svelte"
	import { data, Fact } from "./data"

	/**
	 * Retrieve a random piece of data from the [data] array
	 */
	const randomFact = (): Fact => {
		return data[Math.floor(Math.random() * data.length)];
	}

	let currentFact: Fact = randomFact()
</script>

<Tailwindcss/>
<main class="fixed text-center text-sky-700 text-2xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
	<p>{currentFact.value}</p>
	<br/>
	<button class="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700 px-5 py-2 text-lg leading-5 rounded-full font-semibold text-white" on:click={() => currentFact = randomFact()}>New Random Ocean Fact</button>
</main>