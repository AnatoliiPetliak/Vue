<template>
  <div>
    <span class="movie-name">{{ movieSession.movie.name }}</span>
    <div v-for="(sessionTime, index) in movieSession.movieTime" :key="index">
      <router-link
        :to="{
          name: 'Hall',
          params: { movieId: movieSession.movie.id, sessionIndex: index }
        }"
        >{{ sessionTime }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieSession",
  props: ["movieSession"]
};
</script>

<style>
.movie-name {
}
</style>