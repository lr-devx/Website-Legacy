<template>
    <div id="container">
        <div id="slide-data">
            <h1 id="slide-title" ref="title">UP: Blogs</h1>
            <h3 id="slide-description" ref="description">Explore stories through my blogs!</h3>
            <button id="slide-button" @click="$router.push('/blogs')">Explore now</button>
        </div>
    </div>
</template>

<style scoped>
    #container {
        width: 100%;
        height: 36rem;
        max-width: 1920px;
        margin: auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blue;
    }

    #slide-data {
        max-width: 50%;
    }

    #slide-title {
        text-align: center;
        color: white;
        font-size: 48px;
        transition: opacity 0.5s ease;
    }

    #slide-description {
        text-align: center;
        color: lightgray;
        font-weight: 600;
        font-size: 18px;
        word-wrap: break-word;
        margin-top: 2vh;
        transition: opacity 0.5s ease;
    }

    #slide-button {
        width: 12rem;
        height: 3rem;
        border: 0;
        background-color: white;
        margin-top: 2.5vh;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    #slide-button:hover {
        background-color: red;
    }

    @media (max-width: 720px) {
        #slider-data {
            max-width: 75%;
        }

        #slider-next {
            display: none;
        }

        #slider-previous {
            display: none;
        }

        #slide-button {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>