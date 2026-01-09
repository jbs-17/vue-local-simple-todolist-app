<script setup>
import { ref } from "vue";
import TabCreateOne from "./component/TabCreateOne.vue";
import { todoApp } from "@/js/todolist";
import TodoItem from "./component/TodoItem.vue";
import AppTitle from "./component/AppTitle.vue";
import NothingToDo from "./component/NothingToDo.vue";
import CreateOneBtn from "./component/CreateOneBtn.vue";

const selectedTab = ref("");

function selectTab(tab = "") {
        if (selectedTab.value === tab) return (selectedTab.value = "");
        selectedTab.value = tab;
}

function createOne(todoItem) {
        todoApp.createOne(todoItem);
        selectTab("");
}

function resetAll() {
        selectTab();
        const ok = confirm("All todolist will be deleted. Are you sure?");
        if (!ok) return;
        todoApp.resetTheLocalStorage();
}
</script>

<template>
        <div class="container p-0 position-relative">
        <CreateOneBtn @click="selectTab('TabCreateOne')" />

        <TabCreateOne v-if="selectedTab === 'TabCreateOne'" @cancel="selectTab()" @create="createOne" />

        <AppTitle />


        <div class="w-100 d-flex p-3 flex-sm-column flex-md-column flex-column gap-2">
                <template v-if="!todoApp.theStorage.items.length">
                        <NothingToDo />
                </template>

                <template v-else v-for="{
                        name,
                        description,
                        createdAt,
                        updatedAt,
                        startedAt,
                        endedAt,
                        uid,
                        isDone,
                        doneAt
                } in todoApp.theStorage.items" :key="uid">
                        <TodoItem :name :description :createdAt :updatedAt :startedAt :endedAt :uid :isDone :doneAt />
                </template>
        </div>



                
</div>

</template>

<style scoped>
        div.container {
                /* background-color: red; */
       max-width: 600px;

        }
</style>