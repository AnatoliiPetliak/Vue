<template>
  <div>
    <ul class="menu">
      <li><a href="">NEW</a></li>
      <li>
        <a href="">HALL</a>
        <ul class="drop-menu">
          <li><a href="">RED</a></li>
          <li><a href="">GREEN</a></li>
          <li><a href="">BLUE</a></li>
          <li><a href="">PURPLE</a></li>
        </ul>
      </li>
      <li><a href="" target="_blank">Home</a></li>
      <li>
        <a href="" target="_blank">Film genres</a>
        <ul class="drop-menu">
          <li><a href="">Action</a></li>
          <li><a href="">Adventure</a></li>
          <li><a href="">Comedy</a></li>
          <li><a href="">Drama</a></li>
          <li><a href="">Science</a></li>
          <li><a href="">Noir</a></li>
          <li><a href="">Crime</a></li>
        </ul>
      </li>

      <li><a href="" target="_blank">LogIn</a></li>
      <li>
        <a href="" target="_blank">Register</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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

@charset "UTF-8";
.menu {
  *zoom: 1;
}

.menu:before,
.menu:after {
  content: "";
  display: table;
}

.menu:after {
  clear: both;
  overflow: hidden;
}

.menu,
.drop-menu {
  list-style: none outside none;
}

.menu a {
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-family: Arial, Helvetica;
  font-size: 18px;
}

.menu {
  width: 100%;
  width: -moz-fit-content;
  width: -o-fit-content;
  width: -ms-fit-content;
  width: fit-content;
  margin: 10px auto;
}

.menu > li {
  background: #333333;
  float: left;
  position: relative;
  -webkit-transform: skewX(-25deg);
  -moz-transform: skewX(-25deg);
  -o-transform: skewX(-25deg);
  -ms-transform: skewX(-25deg);
  transform: skewX(-25deg);
  -webkit-backface-visibility: hidden;
}

.menu a {
  display: block;
}

.menu li:hover {
  background: #ff5f7d;
}

.menu > li > a {
  padding: 1em 2em;
  -webkit-transform: skewX(25deg);
  -moz-transform: skewX(25deg);
  -o-transform: skewX(25deg);
  -ms-transform: skewX(25deg);
  transform: skewX(25deg);
  -webkit-backface-visibility: hidden;
}

/*Dropdown menu*/

.drop-menu {
  position: absolute;
  width: 140px;
  left: 50%;
  margin-left: -70px;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: skewX(25deg);
  -moz-transform: skewX(25deg);
  -o-transform: skewX(25deg);
  -ms-transform: skewX(25deg);
  transform: skewX(25deg);
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -o-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
}

.drop-menu li {
  background-color: #333333;
  position: relative;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.drop-menu li a {
  padding: 1em 2em;
}

.drop-menu li::after {
  content: "";
  position: absolute;
  top: -125%;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
}

.drop-menu li:nth-child(odd) {
  -webkit-transform: skewX(25deg) translateX(0);
  -moz-transform: skewX(25deg) translateX(0);
  -o-transform: skewX(25deg) translateX(0);
  -ms-transform: skewX(25deg) translateX(0);
  transform: skewX(25deg) translateX(0);
}

.drop-menu li:nth-child(odd) a {
  -webkit-transform: skewX(-25deg);
  -moz-transform: skewX(-25deg);
  -o-transform: skewX(-25deg);
  -ms-transform: skewX(-25deg);
  transform: skewX(-25deg);
  -webkit-backface-visibility: hidden;
}

.drop-menu li:nth-child(odd)::after {
  right: -50%;
  -webkit-transform: skewX(25deg) rotate(3deg);
  -moz-transform: skewX(25deg) rotate(3deg);
  -o-transform: skewX(25deg) rotate(3deg);
  -ms-transform: skewX(25deg) rotate(3deg);
  transform: skewX(25deg) rotate(3deg);
}

.drop-menu li:nth-child(even) {
  -webkit-transform: skewX(-25deg) translateX(0);
  -moz-transform: skewX(-25deg) translateX(0);
  -o-transform: skewX(-25deg) translateX(0);
  -ms-transform: skewX(-25deg) translateX(0);
  transform: skewX(-25deg) translateX(0);
}

.drop-menu li:nth-child(even) a {
  -webkit-transform: skewX(25deg);
  -moz-transform: skewX(25deg);
  -o-transform: skewX(25deg);
  -ms-transform: skewX(25deg);
  transform: skewX(25deg);
  -webkit-backface-visibility: hidden;
}

.drop-menu li:nth-child(even)::after {
  left: -50%;
  -webkit-transform: skewX(-25deg) rotate(3deg);
  -moz-transform: skewX(-25deg) rotate(3deg);
  -o-transform: skewX(-25deg) rotate(3deg);
  -ms-transform: skewX(-25deg) rotate(3deg);
  transform: skewX(-25deg) rotate(3deg);
}

.menu > li:hover .drop-menu,
.menu > li:hover .drop-menu li {
  opacity: 1;
  visibility: visible;
}

.menu > li:hover .drop-menu li:nth-child(even) {
  -webkit-transform: skewX(-25deg) translateX(15px);
  -moz-transform: skewX(-25deg) translateX(15px);
  -o-transform: skewX(-25deg) translateX(15px);
  -ms-transform: skewX(-25deg) translateX(15px);
  transform: skewX(-25deg) translateX(15px);
}

.menu > li:hover .drop-menu li:nth-child(odd) {
  -webkit-transform: skewX(25deg) translateX(-15px);
  -moz-transform: skewX(25deg) translateX(-15px);
  -o-transform: skewX(25deg) translateX(-15px);
  -ms-transform: skewX(25deg) translateX(-15px);
  transform: skewX(25deg) translateX(-15px);
}

button {
  color: rgb(240, 236, 236);
  width: 25rem;
  border: none;
  padding: 20px;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
  background: rgba(46, 46, 49, 0.8);
  border-radius: 12px;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  -webkit-transition: 300ms ease-in-out;
  -o-transition: 200ms ease-in-out;
  transition: 200ms ease-in-out;
  font-size: large;
  font-style: bold;
  width: 200px;
}

button:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
</style>