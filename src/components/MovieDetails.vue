<template>
  <div class="movie-detail">
    <div class="popup-details">
      <div class="popup-wrapper" ref="popup-wrapper">
        <div class="popup">
          <i
            class="material-icons md-inactive"
            id="btnLanguage"
            @click="closeMovieInfo"
          >
            close
          </i>
          <div class="popup-header">
            <span class="popup-title">{{ popupTitle }}</span>
          </div>
          <div class="popup-content">
            <div>
              <img
                class="movie-detai-image"
                v-bind:src="
                  require('../assets/images/' + movieSession.movie.image)
                "
                alt="img"
              />
            </div>

            <div>
              <p>{{ movieSession.movie.name }}</p>
              <p>{{ movieSession.movie.year }}</p>
              <p>{{ movieSession.movie.director }}</p>
              <p>{{ movieSession.movie.plot }}</p>
            </div>
          </div>
          <div class="popup-footer"></div>
        </div>
      </div>
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
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: ["movieSession"],
  components: {},
  data() {
    return {
      isInfoPopupVisible: true
    };
  },
  computed: {},
  methods: {
    closePopup() {
      this.$emit("closePopup", !this.value);
    },
    showPopupMovie() {
      this.isInfoPopupVisible = true;
      console.log("ShowPOpup  works");
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    }
  },
  mounted() {
    let closePopup = this;
    document.addEventListener("click", function(item) {
      if (item.target === closePopup.$refs["popup-wrapper"]) {
        closePopup.closeMovieInfo();
      }
    });
  }
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  height: 600;
  width: 600px;
  background: #504a4aa4;
  background-size: 100%;
  box-shadow: 0 0 17px 0 #e7e7e7;
  text-align: right;
}
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(23, 27, 26);
  font-size: 36px;
  font-weight: bold;
  justify-content: center;
  padding: 30px;
}

.popup-content {
  display: block;

  text-align: center;
}
.popup-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close-popup {
  padding: 8px;
  color: turquoise;
  background: violet;
}
.popup-wrapper {
  background: rgba(64, 64, 64, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
}
#btnLanguage {
  font-size: 45px;
}
.md-inactive {
  color: rgba(0, 0, 0, 0.26);
  cursor: pointer;
}
</style>
