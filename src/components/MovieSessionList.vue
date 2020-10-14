<template>
  <div class="movie-session-list">
    <h1>Movie Session</h1>
    <div class="list" v-for="(item, index) in movieSessions" :key="index">
      <MovieSession
        v-bind:movieSession="item"
        @click="$emit('select-session', item)"
      />
    </div>
  </div>
</template>

<script>
import MovieSession from "./MovieSession";

export default {
  name: "MovieSessionList",
  props: ["movieSessions"],
  components: {
    MovieSession
  }
};
</script>
<style>
.list {
  background: white;
  text-align: center;
}
</style>

