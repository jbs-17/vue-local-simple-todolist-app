<script setup>
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
       isDone : {
              required : true,
              type : Boolean
       }
})
</script>


<template>


       <article class="text-light border border-1 m-1 p-3 bg-black rounded rounded-4 d-inline-flex flex-column" :uid>
              <h2>{{ name }}</h2>
              <div>
                     <p>{{ description || '-' }}</p>
                     <p>{{ isDone }}</p>
                     
              </div>
              <div class="d-flex flex-column">
                     <time :datetime="createdAt">createdAt : {{ createdAt }}</time>
                     <time :datetime="updatedAt">updatedAt : {{ updatedAt }}</time>
                     <time :datetime="startedAt">startedAt : {{ startedAt }}</time>
                     <time :datetime="endedAt">endedAt : {{ endedAt }}</time>
              </div>
              <div class="d-flex gap-1 m-1 mt-3">
                     <button class="btn btn-sm btn-outline-success">Done</button>
                     <button class="btn btn-sm btn-outline-danger">Delete</button>
              </div>
       </article>

</template>


<style scoped>
       article {
              max-width: 400px;
       }
</style>