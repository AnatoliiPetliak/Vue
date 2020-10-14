<template>
  <div class="movie-detail">
    <div class="popup-details">
      <popup
        v-if="isInfoPopupVisible"
        @close-popup="closeInfoPopup"
        :popupTitle="movieSession.movie.name"
      >
        <div>
          <img
            class="movie-detai-image"
            v-bind:src="require('../assets/images/' + movieSession.movie.image)"
            alt="img"
          />
        </div>

        <div>
          <p>{{ movieSession.movie.name }}</p>
          <p>{{ movieSession.movie.year }}</p>
          <p>{{ movieSession.movie.director }}</p>
          <p>{{ movieSession.movie.plot }}</p>
        </div>
      </popup>
    </div>

    <img
      class="movie-detai-image"
      v-bind:src="require('../assets/images/' + movieSession.movie.image)"
      alt="img"
    />

    <h2>
      <span>{{ movieSession.movie.name }}</span>
      <span>{{ movieSession.movieTime[1] }}</span>
      <span>{{ movieSession.movieTime[0] }}</span>
    </h2>

    <button class="catalog-show-movie" @click="showPopupMovie">
      Show info
    </button>
    <button class="add-to-cart-btn" @click="sendDataToParent">SEND</button>
  </div>
</template>

<script>
import popup from "../components/popup/popup";

export default {
  name: "MovieDetails",
  props: ["movieSession"],
  data() {
    return {
      isInfoPopupVisible: false
    };
  },
  components: {
    popup
  },
  computed: {},
  methods: {
    closePopup() {
      this.$emit("closePopup", !this.value);
    },
    sendDataToParent() {
      this.$emit("sentMovie", this.movieSession.movie.id);
      console.log("SentBTN works");
    },
    showPopupMovie() {
      this.isInfoPopupVisible = true;
      console.log("ShowPOpup  works");
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    }
  }
};
</script>

<style lang="scss">
.movie-detail {
  flex-basis: 25%;
  padding: 16px;
  margin-bottom: 16px;
}
.movie-detai-image {
  width: 200px;
}
</style>
