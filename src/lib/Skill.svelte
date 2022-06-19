<script>
    export let url;
    export let image;
</script>

<div class="skill">
    <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt="Skill" />
    </a>
</div>

<style lang="scss">
    .skill {
        margin: 20px;

        img {
            width: 100px;
        }
    }
</style>
