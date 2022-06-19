<script>
    import Typewriter from "svelte-typewriter";
    export let title;
    export let description;
    export let url;
</script>

<div class="project">
    <h1>{title}</h1>
    <!-- <Typing speed={20} cursorClassName="Cursor">
    <p>{description}</p>
  </Typing> -->
    <Typewriter>
        <p>{description}</p>
    </Typewriter>
    <div class="open-project">
        <a href={url} target="_blank">open</a>
    </div>
</div>

<style lang="scss">
    .project {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 220px;
        border: 2px solid var(--third-color);
        padding: 12px 12px;
        border-radius: 10px 10px;
        margin: 0 20px 20px;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;

        &:not(:hover) {
            .cursor {
                color: var(--second-color) !important;
            }
        }

        &:hover {
            color: var(--first-color);
            background-color: var(--fourth-color);
            border-color: var(--fourth-color);
        }

        * {
            margin: 0;
            padding: 0;
        }

        h1 {
            margin-bottom: 10px;
        }

        .open-project {
            margin-top: auto;

            a {
                display: block;
                width: 100%;
                text-align: center;
                text-decoration: none;
                font-size: 130%;
                background-color: var(--third-color);
                color: var(--first-color);
                border-radius: 3px;
                transition: background-color 0.3s, box-shadow 0.15s;
            }

            &:hover {
                box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff,
                    0 0 2rem var(--fourth-color), 0 0 0.8rem var(--fourth-color),
                    0 0 2.8rem var(--fourth-color),
                    inset 0 0 1.3rem var(--fourth-color);
            }
        }
    }
</style>
