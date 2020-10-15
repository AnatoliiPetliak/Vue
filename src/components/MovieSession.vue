<template>
  <div class="main-film-wrapper">
    <h2 class="movie-name">{{ movieSession.movie.name }}</h2>
    <div
      class="movie-session"
      v-for="(sessionTime, index) in movieSession.movieTime"
      :key="index"
    >
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

<style lang="scss" scoped>
h2 {
  color: aliceblue;
}
.main-film-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.movie-session {
  display: flex;
  color: red;
  font-size: larger;
  font-weight: bolder;
  cursor: pointer;
}
</style>