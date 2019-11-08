<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <the-header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import Footer from './components/Footer';
export default {
  components: {
    TheHeader,
    Footer
  }
};
</script>

<style lang="scss">
body {
  background: #ffc0cb url(assets/background.jpg);
}

#app {
  width: 90%;
  margin: 10px auto;
  background: #fff;
  box-shadow: #666666 0px 0px 7px;
  overflow: hidden;
  border-radius: 10px;
  padding: 0 10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  // tablet
  #app {
    width: 80%;
    margin: 15px auto;
    padding: 0 20px;
  }
}

@media (min-width: 1024px) {
  // desktop
  #app {
    width: 1000px;
    margin: 20px auto;
  }
}
</style>
