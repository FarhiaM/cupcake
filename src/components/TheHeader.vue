<template>
  <header role="banner">
      <img
        src="/Users/farhia/Documents/dev 2019/cupcake-home-assignment/Assets/cupcakes_cookies.png"
        alt="Cookie logo"/>
    
    <h1 class="logo"><router-link to="/">Cupcakes & Cookies</router-link></h1>
    <nav role="navigation">
    <ul class="header-buttons/">
      <li class="home"><router-link to="/">Home</router-link></li>
      <li class="arrow"><router-link to="/">Arrow</router-link></li>
      <li class="file"><router-link to="/">File</router-link></li>
      <li class="faq"><router-link to="/">FAQ</router-link></li>
      <li class="login"><router-link to="/">Profile</router-link></li>
    </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style>
</style>