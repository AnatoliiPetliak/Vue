<template>
  <div class="movie-session-list">
    <div
      class="list"
      v-for="(item, index) in movieSessions"
      :key="index"
      @click="showPanel(item)"
    >
      <img
        class="movie-image"
        v-bind:src="require('../assets/images/' + item.movie.image)"
        alt="img"
      />
      <MovieSession
        v-bind="{
          ...$attrs,
          onClick: event => $emit('select-session')
        }"
        :movieSession="item"
      />
    </div>
    <MovieDetails
      v-bind:movieSession="activeItem"
      v-show="panelShow"
      @close-modal="hidePanel"
    />
  </div>
</template>

<script>
import MovieDetails from "../components/MovieDetails";
import MovieSession from "../components/MovieSession";

export default {
  name: "MovieSessionList",
  props: ["movieSessions", "movies"],
  components: {
    MovieSession,
    MovieDetails
  },
  data() {
    return {
      panelShow: false,
      activeItem: {
        movie: {
          image: "15.jpg"
        }
      }
    };
  },
  methods: {
    showPanel(item) {
      this.activeItem = item;
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
  background: rgb(122, 100, 100);
  text-align: center;
  .movie-image {
    width: 250px;
  }
}
</style>

