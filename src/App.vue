<script setup>
        import TodoListApp from './component/TodoListApp.vue';

import { ref } from 'vue';
const disabled = ref(false);

function warnDisabled() {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 1500);
}
</script>

<template>
        <TodoListApp v-if="false" />

<button @click="warnDisabled">Click me</button>
  <div :class="{ shake: disabled }">Warning message</div>
  

</template>



<style scoped>
        
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes shake {
  /* Define keyframes for the animation */
  10%, 90% { transform: translate3d(-10px, 0, 0); color: red; }
  /* ... more keyframes ... */
}

</style>
<style>
:root {
        --bg-color-1: rgb(10, 10, 10, .9);
        }
        body {
        font-size: 12.7px;
        /*background-color:var(--bg-color-1);*/
        background-image: url("/9fc6e16393705b225aba21fdc447de4d.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        }
</style>