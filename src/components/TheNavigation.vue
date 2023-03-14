<template>
    <div id="nav">
        <app-link class="logo" to="/">Travel App</app-link> 
        <app-link 
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination-detail', params: {id:destination.id, slug:destination.slug}}"
        >
            {{ destination.name }}
        </app-link>
        <app-link to="https://google.com">Google</app-link>
    </div>
</template>

<script>

import sourceData from "../data.json"

export default {
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}

</script>