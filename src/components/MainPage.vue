<template>
  <div style="margin-left: 10%; margin-right: 10%">
    <b-card bg-variant="transparent" text-variant="light" border-variant="dark">
      <Servers/>
    </b-card>
  </div>
</template>

<script>
import Servers from "./servers/Servers.vue"

export default {
  components: { Servers },
  name: 'MainPage'
}
</script>

<style scoped>

.card-body {
  background-color: rgb(0, 0, 0, 0.6);
}
</style>
