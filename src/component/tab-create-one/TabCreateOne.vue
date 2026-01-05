<script setup>

import { TodoItem } from '@/js/todolist';
import { reactive, useTemplateRef, ref } from 'vue';


const emits = defineEmits(['cancel', 'create']);

const errorP = useTemplateRef("name-input");
const isErrorP = ref(false);

const form = reactive({
       name: "",
       description: "",
       start: "",
       end: ""
});



function onCancel() {
       emits('cancel');
};

function onCreate() {
       if (form.name.length < 1){
              errorP.value.innerText = "Todo Name Cannot be empty!";
              isErrorP.value = true;
              return
       }

       isErrorP.value = false;
       emits('create', new TodoItem({
              name: form.name,
              description: form.description,
              startedAt: form.start,
              endedAt: form.end
       }));
       return
}







</script>




<template>
       <div
              @keypress.esc="console.log('apalah')"
              class="container position-fixed top-50 start-50 translate-middle bg-black d-flex flex-column gap-3 border border-1 rounded rounded-3 shadow p-lg-3 px-lg-5 p-3 p-sm-5 the-tab-create-one">

              <div>
                     <h3 class="h3 mt-3 mb-1 text-white-50 text-center fw-bolder">Create New To-Do</h3>
              </div>

              <div class="align-self-center w-100">
                     <label>Name : </label>
                     <input ref="name-input" v-model="form.name" type="text"
                            class="w-100 text-sm-start bg-dark text-white-50 border-0" placeholder="New Todo">
              </div>

              <div class="d-inline-flex flex-column">
                     <label class="">Start Time : </label>
                     <input type="datetime-local" v-model="form.start"
                            class="w-100 text-sm-start align-self-center bg-dark text-white-50 border-0">
              </div>

              <div>
                     <label class="">End Time : </label>
                     <input type="datetime-local" v-model="form.end"
                            class="w-100 text-sm-start align-self-center bg-dark text-white-50 border-0">
              </div>

              <div>
                     <label class="">Description : </label>
                     <textarea v-model="form.description"
                            class="border-0 w-100 text-sm-start align-self-center bg-dark text-white-50 border-0"
                            placeholder="Description"></textarea>
              </div>


              <div class="">

                     <p class="fs-6 text-danger" v-show="isErrorP">Error : Name cannot be empty</p>

                     <button class="btn btn-outline-danger w-25 w-25 m-1 align-self-center d-inline"
                            @click="onCancel">Cancel</button>
                     <button class="btn btn-outline-secondary w-25 m-1 align-self-center d-inline"
                            @click="onCreate">Create</button>

              </div>



       </div>
       <div class="position-fixed top-0 start-0 w-100 h-100 bg-black opacity-75" style="z-index: 998;"></div>
</template>


<style scoped>
.the-tab-create-one {
       z-index: 999;
       width: 90%;
       max-width: 600px;
       filter: brightness(2.5);
}

input,
textarea {
       font-family: Arial, Helvetica, sans-serif;
       outline: 0;
       border-radius: .3rem;
       resize: none;
       /* text-indent: 1rem; */
       font-size: 1rem;
       padding: 5px;
       outline: none;
       box-sizing: border-box;
       padding: .5rem 1rem;
}



input::placeholder,
textarea::placeholder {
       opacity: .5;
}

label {
       text-shadow: 0px 0px 1px rgb(255, 255, 255, 0.3);
       font-size: .9rem;
}


h3 {
       text-shadow: 0px 1px 2px rgb(26, 26, 26), 0px 2px 15px gray;
}
</style>