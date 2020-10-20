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
        v-bind="{
          ...$attrs,
          onInput: event => $emit('select-session', event.target.value)
        }"
        :movieSession="item"
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
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: row;
  width: 100%;
  height: 80%;
  color: aliceblue;

  background: rgba(67, 89, 107, 0.6);
  border-radius: 25px;
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

