<template>
  <div>
    <span>{{ movieSession.movieName }}</span>
    <span>{{ movieSession.movieTime[0] }}</span>
  </div>
</template>

<script>
export default {
  name: "MovieSession",
  props: ["movieSession"]
};
</script>

<style scoped>
</style>