<script>
    import {
        faTwitter,
        faGithub,
        faInstagram,
    } from "@fortawesome/free-brands-svg-icons";

    import Box from "$lib/Box.svelte";
    import Project from "$lib/Project.svelte";
    import Skill from "$lib/Skill.svelte";
    import Social from "$lib/Social.svelte";
    import Pics from "$lib/Pics.svelte";
</script>

<main>
    <div class="info">
        <div class="seb-pic">
            <img src="./logo.png" alt="seb" />
        </div>
        <div class="info-text">
            <h2>im seb</h2>
            <p>
                <Box color="#f7e018" text="javascript" /> && <Box
                    color="#3474a7"
                    text="python"
                /> developer
            </p>
        </div>
    </div>
    <div class="socials">
        <Social url="https://twitter.com/ssebastianoo" icon={faTwitter} />
        <Social url="https://github.com/ssebastianoo" icon={faGithub} />
        <Social url="https://instagram.com/sbstngrtt" icon={faInstagram} />
    </div>
    <h2 class="title">projects</h2>
    <div class="projects">
        <Project
            title="guess the element"
            description="guess the random element from the periodic table"
            url="https://seba.gq/GuessTheElement"
        />
        <Project
            title="venice freestyle lab"
            description="website for venice freestyle lab"
            url="https://preview.venicefreestyle.com"
        />
        <Project
            title="portfolio"
            description="portfolio for a product designer"
            url="https://francescadiana.pages.dev/"
        />
    </div>
    <h2 class="title">skills</h2>
    <div class="skills">
        <Skill
            image="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
            url="https://www.w3schools.com/html/"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png"
            url="https://www.w3schools.com/css/"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            url="https://www.python.org/"
        />
        <Skill
            image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            url="https://git-scm.com/"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
            url="https://expressjs.com/"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
            url="https://nodejs.org/"
        />
        <Skill
            image="https://www.corsinvest.it/wp-content/uploads/2019/10/mysql-icon-3.png"
            url="https://www.mysql.com/"
        />
        <Skill
            image="https://w.namu.la/s/bbde860dbfce579361e8798eae0e121c552405da431c48ba628ae113ee5a400122e79799cf7133364839758121c40b04aaba1b0dadfd478d82fb95af70b79c9fb99265261ca690ee6a41d8343fcc273a"
            url="https://discordpy.readthedocs.io/en/stable/"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"
            url="https://socket.io/"
        />
        <Skill
            image="https://flask-training-courses.uk/images/flask-logo.png"
            url="https://flask.palletsprojects.com/"
        />
        <Skill
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
            url="https://svelte.dev/"
        />
    </div>
    <h2 class="title">who am i</h2>
    <div class="about">
        <p class="about-description">
            hello, i'm a still-learning web developer from italy, after some
            years of python developing i decided to focus on web development,
            learning new technologies, currently i'm in love with svelte.
            besides programming, i'm a photo and video student, here are some of
            my shots
        </p>
        <Pics />
    </div>
    <div class="footer" />
</main>

<style lang="scss">
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .seb-pic img {
        width: 200px;
        animation: float 3s ease-in-out infinite;
    }

    .info {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .info-text {
        max-width: 250px;
        letter-spacing: 4px;
    }

    .socials {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        margin: 25px 0 25px;
        text-align: center;
        letter-spacing: 10px;
    }

    .projects {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .skills {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 100px;
    }

    .about {
        p {
            margin: 0 100px;
        }
    }

    .footer {
        height: 50px;
    }
</style>
