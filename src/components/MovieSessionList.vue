<template>
  <div class="movie-session-list">
    <div class="list" v-for="(item, index) in movieSessions" :key="index">
      <MovieDetails
        v-for="(movieSession, index) in movieSessionsExtended"
        :key="index"
        v-bind:movieSession="movieSession"
        v-on:sentMovie="showChildArticle"
      />
      <img
        class="movie-image"
        v-bind:src="require('../assets/images/' + item.movie.image)"
        alt="img"
      />
      <MovieSession
        v-bind:movieSession="item"
        @click="$emit('select-session', item)"
      />
    </div>
  </div>
</template>

<script>
import MovieDetails from "../components/MovieDetails";
import MovieSession from "./MovieSession";

export default {
  name: "MovieSessionList",
  props: ["movieSessions"],
  components: {
    MovieSession,
    MovieDetails
  }
};
</script >
<style lang="scss" scoped>
.movie-session-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.list {
  margin: 10px;
  flex-direction: rov;
  background: rgb(122, 100, 100);
  text-align: center;
  .movie-image {
    width: 250px;
  }
}
</style>

