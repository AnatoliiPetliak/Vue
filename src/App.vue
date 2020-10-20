<template>
  <div>
    <div class="container demo">
      <div class="content">
        <div id="large-header" class="large-header">
          <canvas id="demo-canvas"></canvas>
          <router-link to="/">
            <h1 class="main-title">
              <span class="thin">DISCOVER</span> CINEMAX
            </h1>
          </router-link>
        </div>
        <hr />
      </div>
    </div>
    <router-view />
  </div>
</template>



<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-color: rgb(86, 93, 94);
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg");
  background-size: cover;
  overflow: auto;
}

.app {
  display: flex;
  justify-content: flex-end;
}

.large-header {
  position: relative;
  width: 100%;
  height: 100px;
  background: #111;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

.demo .large-header {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg");
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
}

.demo .main-title {
  text-transform: uppercase;
  font-size: 3.1em;
  letter-spacing: 0.1em;
}

.main-title .thin {
  font-weight: 200;
}

@media only screen and (max-width: 768px) {
  .demo .main-title {
    font-size: 3em;
  }
}
</style>
