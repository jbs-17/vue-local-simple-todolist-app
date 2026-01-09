<script setup>
import { TodoItem } from "@/js/todolist";
import { reactive, useTemplateRef, ref } from "vue";

const emits = defineEmits(["cancel", "create"]);




const {
       todoItem
} = defineProps({
       todoItem : {
              type : ()=> {
                     return {
                            uid : String
                     }
              },
              default : () => ({
                     uid: {
              required: true,
              type: String
       },
       name: {
              required: true,
              type: String
       },
       description: {
              required: true,
              type: String
       }, startedAt: {
              required: false,
              type: Date
       }, endedAt: {
              required: false,
              type: [Date]
       }, createdAt: {
              required: true,
              type: Date
       }, updatedAt: {
              required: true,
              type: Date
       },
       doneAt: {
              required: true,
              type: Date
       },
       isDone: {
              required: true,
              type: Boolean
       }
              })
       }
})



// const errorP = useTemplateRef("name-input");
const errorMsg = ref('');

const form = reactive({
    name: "",
    description: "",
    start: "",
    end: ""
});

function onCancel() {
    emits("cancel");
}

function showErrorMsg(msg) {
    errorMsg.value = msg;
}

function onCreate() {
    if (form.name.length < 1) return showErrorMsg("Todo's name required!");
    
    const start = new Date(form.start);
    const end = new Date(form.end);

    if (form.start && form.end)
        if (start > end) return showErrorMsg("The start time should be earlier than the deadline!");
    
    if(end < new Date(Date.now() - 1000 * 60 * 1 )) return showErrorMsg("The deadline time should be in the future!");

    errorMsg.value = '';
    emits(
        "create",
        new TodoItem({
            name: form.name,
            description: form.description,
            startedAt: form.start,
            endedAt: form.end
        })
    );
    return;
}
</script>

<template>
    <div
        class="container position-fixed top-50 start-50 translate-middle d-flex flex-column gap-3 border border-1 rounded rounded-3 shadow p-lg-3 px-lg-5 p-3 p-sm-5 the-tab-create-one"
    >
        <div>
            <h3 class="h3 mt-3 mb-1 text-black-50 text-center fw-normal">
                Todo Detail's
            </h3>
        </div>

        <div class="align-self-center w-100">
            <label>Name : </label>
            <input
                ref="name-input"
                v-model="form.name"
                type="text"
                class="w-100 text-sm-start  text-black "
                placeholder="New Todo"
            />
        </div>

        <div class="d-inline-flex flex-column">
            <label class="">Start : </label>
            <input
                type="datetime-local"
                v-model="form.start"
                class="w-100 text-sm-start align-self-center  text-black "
            />
        </div>

        <div>
            <label class="">Deadline : </label>
            <input
                type="datetime-local"
                v-model="form.end"
                class="w-100 text-sm-start align-self-center  text-black "
            />
        </div>

        <div>
            <label class="">Description : </label>
            <textarea
                v-model="form.description"
                class=" w-100 text-sm-start align-self-center  text-black "
                placeholder="Description"
            ></textarea>
        </div>

        <div class="">
            <p class="fs-6 text-danger fw-bold" v-if="errorMsg.length !== 0">            
                Error : {{ errorMsg }}
            </p>

            <button
                class="btn btn-outline-danger w-25 w-25 m-1 align-self-center d-inline"
                @click="onCancel"
            >
                Cancel
            </button>
            <button
                class="btn btn-outline-success w-25 m-1 align-self-center d-inline"
                @click="onCreate"
            >
                Create
            </button>
        </div>
    </div>
    <div
        class="position-fixed top-0 start-0 w-100 h-100 bg-black opacity-75"
        style="z-index: 998"
    ></div>
</template>

<style scoped>
.the-tab-create-one {
    z-index: 999;
    width: 90%;
    max-width: 500px;
    background-color: rgba(255, 255, 255);
}

input,
textarea {
    font-family: Arial, Helvetica, sans-serif;
    outline: 0;
    border-radius: 0.3rem;
    resize: none;
    font-size: 1rem;
    padding: 5px;
    outline: none;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
}

input::placeholder,
textarea::placeholder {
    
}

label {
    text-shadow: 0px 0px 1px rgba(255, 255, 255, 3);
    font-size: 0.9rem;
}

h3 {
    text-shadow:
        0px 1px 2px rgb(26, 26, 26),
        0px 2px 15px rgb(255, 255, 255);
}
</style>
