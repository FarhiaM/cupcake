<template>
  <header class="header" role="banner">
    <h1 class="logo">
      <router-link to="/">Cupcakes & Cookies</router-link>
    </h1>
    <nav role="navigation">
        <Buttons style="width: 50px" icon="fas fa-home" iconRouter="/">Home</Buttons>
        <Buttons style="width: 50px" icon="fas fa-compass" iconRouter="/maps">Arrow</Buttons> 
        <Buttons style="width: 50px" icon="far fa-sticky-note" iconRouter="/about">About</Buttons> 
        <Buttons style="width: 50px" icon="fas fa-question" iconRouter="/faq">FAQ</Buttons> 
        <Buttons style="width: 50px" icon="fas fa-user-alt">Profile</Buttons>
    </nav>
  </header>
</template>

<script>
import Buttons from './Buttons';

export default {
  name: "TheHeader",
   components: {
    Buttons
   }
};
</script>

<style lang="scss" scoped>

.header {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20;
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  .logo {
    margin: 0;
    a {
      display: block;
      height: 82px;
      width: 282px;
      background: url("../assets/cupcakes_cookies.png") 0 0 no-repeat;
      text-indent: -9999px;
    }
  }
}

nav {
  width: 100%;
}


@media (min-width: 768px) and (max-width: 1023px) {
  // tablet
  .header {
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  padding: 15px;
  }
}

@media (min-width: 1024px) {
  //Desktop
  .header {
  grid-template-areas: 
    'logo . nav';
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr auto;
  padding: 20px;
  }

  .logo{
    grid-area: logo;
  }

  nav{
    grid-area: nav;
  }
}

.header-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
}
</style>