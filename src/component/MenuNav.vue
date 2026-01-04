<script setup>
const {selectTab, resetAll} = defineProps({
       selectTab: {
              type: Function
       },
       resetAll : {
              type : Function
       }
})
</script>

<template>
       <div class="d-flex m-5 justify-content-center gap-2">
              <button class="btn btn-sm btn-dark btn-outline-light" @click="selectTab('TabCreateOne')">Add New
                     Todo</button>
              <button class="btn btn-sm btn-dark btn-outline-light" @click="resetAll">Reset All</button>
       </div>
</template>