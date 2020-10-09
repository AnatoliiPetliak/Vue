<template>
  <div class="movie-detail">
    <div class="popup-details">
      <popup
        v-if="isInfoPopupVisible"
        @close-popup="closeInfoPopup"
        :popupTitle="movie.name"
      >
        <div>
          <img
            class="movie-detai-image"
            v-bind:src="require('../assets/images/' + movie.image)"
            alt="img"
          />
        </div>

        <div>
          <p>{{ movie.name }}</p>
          <p>{{ movie.year }}</p>
          <p>{{ movie.director }}</p>
          <p>{{ movie.plot }}</p>
        </div>
      </popup>
    </div>

    <img
      class="movie-detai-image"
      v-bind:src="require('../assets/images/' + movie.image)"
      alt="img"
    />
    <span>Movie session</span>
    <span>Movie session</span>

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
  props: ["movie"],
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
      this.$emit("sentMovie", this.movie.id);
    },
    showPopupMovie() {
      this.isInfoPopupVisible = true;
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
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
}
.movie-detai-image {
  width: 200px;
}
</style>
