<template>
    <h3>{{ experience.name }}</h3>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
</template>

<script>

import sourceData from "../data.json"

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        experienceSlug: {
            type: String,
            required: true
        }
    },
    computed: {
        destination() {
            return sourceData.destinations.find(destination => this.id === destination.id)
        },
        experience() {
            return this.destination.experiences.find(experience => this.experienceSlug === experience.slug)
        }
    }
}

</script>