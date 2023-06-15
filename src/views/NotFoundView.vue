<template>
    <div id="container">
        <div id="text-container">
            <h2>This doesn't seem right</h2>
            <h5>Looks like the page you are looking for doesn't exist!</h5>
        </div>
    </div>
</template>

<style scoped>
    #container {
        height: calc(100vh - (80px + 64px));
        max-width: 1920px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: midnightblue;
    }
    
    #text-container {
        text-align: center;
    }

    h2 {
        font-size: 48px;
        color: white;
    }

    h5 {
        
        font-size: 32px;
        color: lightgray;
    }

    @media (max-width: 720px) {
        h2 {
            font-size: xx-large;
        }

        h5 {
            font-size: large;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: large;
        }

        h5 {
            font-size: medium;
        }
    }
</style>