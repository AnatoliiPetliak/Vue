<template>
  <div class="movie-session-list">
    <div class="list" v-for="(item, index) in movieSessions" :key="index">
      <MovieDetails
        v-bind:movieSession="item"
        v-show="panelShow"
        @close-modal="hidePanel"
      />
      <img
        class="movie-image"
        v-bind:src="require('../assets/images/' + item.movie.image)"
        alt="img"
        @click="showPanel"
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
  props: ["movieSessions", "movies"],
  components: {
    MovieSession,
    MovieDetails
  },
  data() {
    return {
      panelShow: false
    };
  },
  methods: {
    showPanel() {
      this.panelShow = true;
    },
    hidePanel() {
      this.panelShow = false;
    }
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

