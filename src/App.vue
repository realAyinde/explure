<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">

#other-devices {
  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px) {
    display: none;
  }
}

#mobile {
  @media only screen and (min-width: 480px),
    only screen and (min-device-width: 480px) {
    display: none;
  }
}

@font-face {
  font-family: "Hey Comic";
  src: local("Hey Comic"),
   url(~@/fonts/HeyComic.ttf) format("truetype");
}

@font-face {
  font-family: "Stanberry";
  src: local("Stanberry"),
   url(~@/fonts/Stanberry.ttf) format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.2em;
}

a {
  text-decoration: none;
}

@media only screen and (max-width: 480px),
  only screen and (max-device-width: 480px) {
  #app {
    font-family: Arial, sans-serif;
    color: #2c3e50;
   
  }
}
</style>
