<script setup>

import { ref } from 'vue';
import TabCreateOne from './tab-create-one/TabCreateOne.vue';
import { todoApp } from '@/js/todolist';
import TodoItem from './TodoItem.vue';
import AppTitle from './AppTitle.vue';
import MenuNav from './MenuNav.vue';


console.info(todoApp.theStorage)


const selectedTab = ref("");

function selectTab(tab = '') {
       if (selectedTab.value === tab) return selectedTab.value = '';
       selectedTab.value = tab;
}

function createOne(todoItem) {
       todoApp.createOne(todoItem);
       selectTab('');
}



function resetAll() {
       selectTab();
       const ok = confirm("All todolist will be deleted. Are you sure?");
       if (!ok) return;
       todoApp.resetTheLocalStorage();
}








</script>

<template>
       <TabCreateOne v-if="selectedTab === 'TabCreateOne'" @cancel="selectTab()" @create="createOne" />


       <AppTitle />

       <MenuNav :reset-all="resetAll" :select-tab="selectTab" />

       <div class="d-flex flex-row justify-content-start gap-3 flex-wrap">

              <template
                     v-for="({ name, description, createdAt, updatedAt, startedAt, endedAt, uid, isDone, doneAt }) in todoApp.theStorage.items"
                     :key="uid">
                     <TodoItem :name :description :createdAt :updatedAt :startedAt :endedAt :uid :isDone :doneAt />
              </template>
       </div>


</template>