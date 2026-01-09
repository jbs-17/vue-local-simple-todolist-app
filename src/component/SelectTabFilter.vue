<script setup>
import { ref } from 'vue';
const tabs = [
       'main',
       'late',
       
]
       const tabFilter = ref(tabs[0]);
</script>
<template>
       <select v-model="tabFilter">
              
              <template v-for="tab in tabs"  :key="tab">
                     <option :value="tab" :selected="tab === 'main'" >{{ tab.toUpperCase() }}</option>
              </template>

       </select>
</template>