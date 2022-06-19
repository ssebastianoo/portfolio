<script>
    import { onMount } from "svelte";
    let pics = [];

    onMount(async () => {
        const res = await fetch("https://xs3lmn.deta.dev/");
        pics = (await res.json()).pics.slice(0, 6);
    });
</script>

<div class="pics">
    {#each pics as pic}
        <img src={pic} alt="pic" />
    {:else}
        <p>loading...</p>
    {/each}
</div>
<div class="unsplash">
    <a href="https://unsplash.com/@ssebastianoo" target="_blank">
        <img src="./Unsplash_Logo_Full_White.png" alt="Unsplash" />
    </a>
</div>

<style lang="scss">
    .pics {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        img {
            width: 300px;
            margin: 50px;
        }
    }

    .unsplash {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 200px;
        }
    }
</style>
