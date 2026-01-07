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


       <article class="text-light border-dark border border-1 rounded rounded-4 d-inline-flex flex-column w-100 p-3" :uid>
              <h2 class="text-dark text-wrap text-break">{{ name }}</h2>
              <div>
                     <p class="text-dark m-0 p-0 d-block text-wrap text-break">{{ description || '-' }}</p>

                     
              </div>
              <div class="d-flex flex-column">
                     <time class="text-dark" :datetime="startedAt">Start : {{ startedAt?.toLocaleString?.() ?? '-' }}</time>
                     <time class="text-dark" :datetime="endedAt">Deadline : {{ endedAt?.toLocaleString?.() ?? '-' }}</time>
              </div>
              <div class="d-flex gap-1 m-1 mt-3">
                     <button class="btn btn-sm btn-outline-success">Mark Done</button>
                     <button class="btn btn-sm btn-outline-dark">Detail</button>
              </div>
              
              <button class="btn btn-sm position-absolute mx-2 mt-2">
                      <spann v-for="i in 3" class="bg-black">
                      </spann>
                      
              </button>
       </article>

</template>


<style scoped>
       article {
              
              background: transparent;
              background-color: rgba(240,250,255, .5);
       }
       
       h1 {
       
       }
       
       
       span {
         padding: 2px;
       }
</style>