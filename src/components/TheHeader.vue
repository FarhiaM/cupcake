<template>
  <header role="banner">
    <h1 class="logo"><router-link to="/">Cupcakes & Cookies</router-link></h1>
    <nav role="navigation">
    <ul class="header-buttons/">
      <li class="icon-house"><router-link to="/">Home</router-link></li>
      <li class="icon-compass-arrow"><router-link to="/">Arrow</router-link></li>
      <li class="icon-file"><router-link to="/">File</router-link></li>
      <li class="icon-question-mark"><router-link to="/">FAQ</router-link></li>
      <li class="icon-person"><router-link to="/">Profile</router-link></li>
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

.logo a {
  display: block;
  height: 82px;
  width: 282px;
  background: url('../assets/cupcakes_cookies.png') 0 0 no-repeat;
  text-indent: -9999px;
}

.header-buttons{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
}

.icon-house {
    margin: 5px;
    color: #FF4674;
    background-image: url('../assets/Icons/house.png');
    background-position: center;
    height: 20px;
    width: 20px;
    right: 150px;
    display: inherit;
    right: 150px;
}

.icon-compass-arrow {
    margin: 5px;
    color: #FF4674;
    background-image: url('../assets/Icons/compass-arrow.png');
    height: 20px;
    width: 20px;
    right: 150px;
    display: inherit;
    right: 150px;
}

.icon-file {
    margin: 5px;
    color: #FF4674;
    background-image: url('../assets/Icons/file.png');
    height: 20px;
    width: 20px;
    right: 150px;
    display: inherit;
    right: 150px;
}

.icon-question-mark {
    margin: 5px;
    color: #FF4674;
    background-image: url('../assets/Icons/question-mark.png');
    height: 20px;
    width: 20px;
    right: 150px;
    display: inherit;
    right: 150px;
}

.icon-person {
    margin: 5px;
    color: #FF4674;
    background-image: url('../assets/Icons/person.png');
    height: 20px;
    width: 20px;
    right: 150px;
    display: inherit;
    right: 150px;
}

/*menu*/
nav {
  float: right;
  margin: 20px 0px;
}
nav ul li {
  background: #ee2461;
  border-radius: 40px;
  float: left;
  margin-left: 10px;
}
nav ul li:hover {
  box-shadow: #555555 0 0 6px;
}
nav ul li:first-child {
  margin: 0;
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