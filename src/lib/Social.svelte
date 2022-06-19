<script>
    import Fa from "svelte-fa/src/fa.svelte";

    export let url;
    export let icon;
</script>

<div class="social">
    <a href={url} target="_blank" rel="noreferrer">
        <Fa {icon} />
    </a>
</div>

<style lang="scss">
    .social {
        margin: 0px 10px;
    }

    .social a {
        font-size: 40px;
        color: unset;
        text-decoration: unset;
        color: var(--third-color);
        transition: color 0.2s;
    }

    .social a:hover {
        color: var(--fourth-color);
    }
</style>
