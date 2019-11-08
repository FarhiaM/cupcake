<template>
  <header class="header" role="banner">
    <h1 class="logo">
      <router-link to="/">Cupcakes & Cookies</router-link>
    </h1>
    <nav role="navigation">
      <ul class="icon-buttons">
        <Buttons iconname="icon-house">Home</Buttons>
        <Buttons iconname="icon-compass-arrow">Arrow</Buttons> 
        <Buttons iconname="icon-file">File</Buttons> 
        <Buttons iconname="icon-question-mark">FAQ</Buttons> 
        <Buttons iconname="icon-person">Profile</Buttons>
      </ul>
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

<style lang="scss">
.header {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20;
  padding: 10px;
  align-items: center;
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
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    padding: 0;
    margin: 0;
  }
}


@media (min-width: 768px) and (max-width: 1023px) {
  // tablet
  .header {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
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

/*menu*/
nav ul li:hover {
  box-shadow: #555555 0 0 6px;
}

nav ul li a {
  text-indent: -9999px;
  width: 42px;
  height: 42px;
  display: block;
  background-repeat: no-repeat;
  cursor: pointer;
}
nav ul li.home a {
  background-position: center -1102px;
}
nav ul li.oQueE a {
  background-position: center -830px;
}
nav ul li.planos a {
  background-position: center -1170px;
}
nav ul li.faq a {
  background-position: center -898px;
}
</style>