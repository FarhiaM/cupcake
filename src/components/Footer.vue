<template>
  <div class="footer">
  <div class="copyright-info">
      <p class="Signika-Regular">Cupcakes & Cookies 2019. Todos as diretios reservados.</p>
      <p class="Signika-Regular">Conheca a nossa. Politica de Privadde.</p>
  </div>
    <nav role="navigation-footer">
      <ul class="icon-buttons">
        <Buttons icon="fab fa-twitter">Twitter</Buttons>
        <Buttons icon="fab fa-facebook">Facebook</Buttons>
        <Buttons icon="fab fa-linkedin">LinkedIn</Buttons>
      </ul>
    </nav>
  </div>
</template>

<script>
import Buttons from "./Buttons";
export default {
  name: "Footer",
  components: {
    Buttons
  }
};
</script>

<style lang="scss">

@font-face {
    font-family: "Signika-Regular";
    color: white;
    src: url("../assets/Fonts/Signika-Regular.ttf");
}

.Signika-Regular{
    color: rgb(255, 255, 255);
    font-family: "Signika-Regular";
    margin: 20px 0;
    font-size: 0.7rem;
    font-style: italic;
}

.copyright-info{

}

@media (min-width: 768px) and (max-width: 1023px) {
  // tablet
  .footer {
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  align-items: center;
  padding: 15px;
  }
}

@media (min-width: 1024px) {
  //Desktop
  .footer {
  grid-template-areas: 
    'logo . nav';
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr auto;
  padding: 20px;
  }
  .navigation-footer{
    grid-area: nav;
  }
}

.footer {
  background: #ee2461;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  justify-content: end;
  align-items: center;
  grid-gap: 20;
  padding: 10px;
}

.navigation-footer {
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 0;
    margin: 0;
  }
}
.navigation-footer ul li {
  background: #ee2461;
  border-radius: 40px;
  float: left;
  margin-left: 10px;
}

.icon-twitter {
  background-image: url("../assets/Icons/twitter.png");
  background-position: center;
  background-repeat: no-repeat;
}

.icon-facebook {
  background-image: url("../assets/Icons/facebook.png");
  background-position: center;
  background-repeat: no-repeat;
}

.icon-linkedin {
  background-image: url("../assets/Icons/linkedin.png");
  background-position: center;
  background-repeat: no-repeat;
}

</style>