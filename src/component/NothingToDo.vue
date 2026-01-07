<script setup>
        const messages = [
        "Good time to relax!",
        "You have a lot of free time!",
        "Take a rest if you are tired",
        "Maybe there is something you forgot to do!",
        "You can choose to rest!",
        "Being lazy"
        ];
        const message = messages[Math.floor(Math.random() * messages.length)];
</script>

<template>
        <h1 class="h3 w-100 h-100 text-black text-center d-flex flex-column align-self-center">
                Nothing to do!
                <br/>
                <span class="h5">
                        {{ message }}
                </span>
        </h1>
</template>

<style scoped>
        h1 {
         text-shadow: 0px 0px 10px rgba(255,255,255,.5) ;
        }
</style>