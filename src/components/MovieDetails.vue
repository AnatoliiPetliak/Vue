<template>
  <div class="movie-detail">
    <div class="popup-details">
      <div class="popup-wrapper">
        <div class="popup">
          <i
            class="material-icons md-inactive"
            id="btn"
            @click="$emit('close-modal')"
          >
            close
          </i>

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
              <p>{{ movieSession.movie.image }}</p>
              <p>{{ movieSession.movie.year }}</p>
              <p>{{ movieSession.movie.director }}</p>
              <p>{{ movieSession.movie.plot }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: ["movieSession"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.popup {
  height: 600;
  width: 600px;
  background: #504a4aa4;
  background-size: 100%;
  box-shadow: 0 0 17px 0 #e7e7e7;
  text-align: right;
}

.popup-content {
  text-align: center;
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
#btn {
  font-size: 45px;
  color: rgb(180, 30, 30);
}
.md-inactive {
  color: rgba(0, 0, 0, 0.26);
  cursor: pointer;
}
</style>
