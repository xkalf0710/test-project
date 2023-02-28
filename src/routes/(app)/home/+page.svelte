<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
    
    const {products} = data
</script>

<h1>Shop</h1>

<p>{JSON.stringify(products)}</p>