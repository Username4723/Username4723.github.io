<template>
  <div style="padding: 3%">
    <b-card bg-variant="transparent" text-variant="light" border-variant="dark">
      <b-card-title>Nathan Nguyen</b-card-title>
    </b-card>
    <br/>
    <b-card bg-variant="transparent" text-variant="light" border-variant="dark">
      <router-view></router-view>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'MainPage'
}
</script>

<style scoped>

.card-body {
  background-color: rgb(0, 0, 0, 0.6);
}
</style>
