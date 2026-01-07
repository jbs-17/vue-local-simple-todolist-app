<script setup>
const {
    name,
    description,
    startedAt,
    endedAt,
    createdAt,
    updatedAt,
    uid,
    doneAt,
    isDone
} = defineProps({
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
    },
    startedAt: {
        required: false,
        type: Date
    },
    endedAt: {
        required: false,
        type: [Date]
    },
    createdAt: {
        required: true,
        type: Date
    },
    updatedAt: {
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
});



</script>

<template>
    <div class="container d-flex flex-column p-sm-3">
            <h1 class="h1 text-black">
                    {{ name }}
            </h1>
            <p>{{ description }}</p>
            
            <div class="">
                    <small :v-if="startedAt" class="">
                    started At : {{ startedAt }}</small>
                    <small :v-if="endedAt" class="">
                    started At : {{ endedAt }}</small>
                    
                    <small class="">
                    created At : {{ createdAt }}</small>
                    
                    <small class="">
                    updated At : {{ updatedAt }}</small>
                    
            </div>
    </div>
</template>
