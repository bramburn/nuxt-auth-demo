<template>
  <div>Hello</div>
</template>

<script lang="ts">
import Vue from '@nuxt/vue-app'

export default Vue.extend({
  mounted () {
    console.log(this.$auth.isLoggedIn)
  }
})
</script>

<style scoped>

</style>
