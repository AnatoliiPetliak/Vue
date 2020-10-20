<template>
  <div>
    <div class="content">
      <div class="large-header">
        <router-link to="/">
          <h1 class="main-title"><span class="thin">DISCOVER</span> CINEMAX</h1>
        </router-link>
      </div>
      <hr />
    </div>

    <router-view />
  </div>
</template>



<style lang="scss">
@import "../src/scss/_reset.scss";

body {
  font-family: "Roboto", sans-serif;
  background-color: rgb(86, 93, 94);
  background-image: url("../src/assets/images/demo-bg.jpg");
  background-size: cover;
  overflow: auto;
}

.large-header {
  position: relative;
  width: 100%;
  height: 100px;
  background: #111;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  background-image: url("../src/assets/images/demo-bg.jpg");
}

.main-title {
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f9f1e9;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  text-transform: uppercase;
  font-size: 3.1em;
  letter-spacing: 0.1em;

  .thin {
    font-weight: 200;
  }
}
</style>
