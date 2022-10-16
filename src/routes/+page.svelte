<script>
	export let count = 0;

	function handleClick () {
		count = count + 1;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Counter: {count}</p>

<button on:click={handleClick}>+1</button>
