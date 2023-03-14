<template>

  <TheNavigation/>
  <div class="container">
    <RouterView v-slot="{Component}">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </Transition>
    </RouterView>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {TheNavigation}
}

</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>