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
       <div class="d-flex justify-content-center gap-2 w-100 border-bottom border-top border-1 p-2 mb-3">
              <button class="btn btn-sm btn-outline-dark" @click="selectTab('TabCreateOne')">Add New
                     Todo</button>
              <button class="btn btn-sm btn-outline-dark" @click="resetAll">Reset All</button>
       </div>
</template>