<script setup>
import { ref } from 'vue';
import DeleteItem from './DeleteItem.vue';
import MarkDone from './MarkDone.vue';
import SeeDetails from './SeeDetails.vue';
import TabDetail from './TabDetail.vue';

const { name, description, startedAt, endedAt, createdAt, updatedAt, uid, doneAt, isDone } = defineProps({
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

const late = endedAt && endedAt < new Date();

const showDetail = ref(false);



</script>


<template>


       <article class="border-dark border border-1 rounded rounded-3 d-inline-flex flex-column w-100 m-0 p-sm-4 p-md-3 p-3"
              :uid>
              <h2 class="text-black m-0 p-0">{{ name }}</h2>
              <div>
                     <p class="text-dark m-0 p-0 d-block text-wrap text-break" v-if="description">{{ description }}</p>
              </div>

              <hr class="my-2">


              <div class="d-flex flex-column">
                     <time class="text-dark" v-if="startedAt" :datetime="startedAt">Start : {{
                            startedAt?.toLocaleString?.()
                            }}</time>
                     <time class="" :class="late ? 'text-danger' : 'text-dark'" v-if="endedAt" :datetime="endedAt">Deadline : {{
                            endedAt?.toLocaleString?.()
                            }}</time>
                     <small v-if="late" class="text-danger">Past the deadline or late</small>
              </div>


              <div class="d-flex gap-1 m-1 mt-3">
                     <mark-done />
                     <see-details @click="showDetail = !showDetail" :todo-item  />
                     <delete-item/>
              </div>


              <tab-detail v-if="showDetail"/>

              <button class="btn btn-sm position-absolute mx-2 mt-2">

              </button>
       </article>

</template>


<style scoped>
article {
       max-width: 470px;
       justify-self: center;
       align-self: center;
       
}



span {
       padding: 2px;
}


p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-height: 3.1rem;

}
</style>