<template>
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
        <slot></slot>
      </div>
      <div class="popup-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    popupTitle: {
      type: String,
      default: "Popup name"
    }
  },
  methods: {
    closeMovieInfo() {
      this.$emit("close-popup");
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["popup-wrapper"]) {
        vm.closeMovieInfo();
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
  cursor: not-allowed;
}
</style>