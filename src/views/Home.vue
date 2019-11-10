<template>
  <div class="home">
    <carousel />

    <h3 class="Signika-Bold">Meet some candy options</h3>

    <div class="recipes">
      <Option class="recipe-1">
      <h4 slot="title" class="Signika-Semibold">Option A</h4>
      <p slot="paragraph" class="Signika-Light">Tart marzipan tart pastry cake jelly-o. Sugar plum pudding macroon liqriouse I love. Pastry dessert cookie tart. I love I love topping danish.</p>
      <ul slot="list">
        <li class="checkmark Signika-Light">Candy cane cheesecake</li>
        <li class="checkmark Signika-Light">Apple pie wafer</li>
        <li class="checkmark Signika-Light">Tiramisu cupcake</li>
        <li class="checkmark Signika-Light">Lemon drops faroki</li>
      </ul>
      <Buttons slot="button" iconText="veja mais" icon="fas fa-plus-circle"></Buttons>
      </Option>

      <Option class="recipe-1">
      <h4 slot="title" class="Signika-Semibold">Option B</h4>
      <p slot="paragraph" class="Signika-Light">Halvah wypas pudding I love candy toffee. Jelly beans chupa chups pudding danish I love donut. I love danish bonbon jelly-o I love gummies cotton candy marzipan danish. Donut sweet pastry jujubes croissant.</p>
      <ul slot="list">
        <li class="checkmark Signika-Light">Tootsie roll cheesecake</li>
        <li class="checkmark Signika-Light">hupa chups wafer</li>
        <li class="checkmark Signika-Light">Danish marzipan</li>
      </ul>
      <Buttons slot="button" iconText="veja mais" icon="fas fa-plus-circle"></Buttons>
      </Option>

      <Option class="recipe-1">
      <h4 slot="title" class="Signika-Semibold">Option C</h4>
      <p slot="paragraph" class="Signika-Light">Liquorice toffee marzipan lemon drops chocolate cake ice crearri.</p>
      <ul slot="list">
        <li class="checkmark Signika-Light">Chocolate marzipan jelly</li>
        <li class="checkmark Signika-Light">Sweet lollipop ice cream</li>
        <li class="checkmark Signika-Light">Souffié jelly-o bear clave sweet</li>
        <li class="checkmark Signika-Light">Brownie pie gummi bears</li>
        <li class="checkmark Signika-Light">Jelly beans dragée</li>
      </ul>
      <Buttons slot="button" iconText="veja mais" icon="fas fa-plus-circle"></Buttons>
      </Option>
    </div>

  <div class="recipes-info">
    <Buttons slot="button" iconText="Faca um taste" icon="far fa-heart" style="margin: 0px"></Buttons>
    <p class="Signika-Light infotext">Cupcake ipsum dorum sit amet carrot cake marshmellow wypas. Muffin lemon drops I love carmels chocolate bar.</p>
  </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Option from "@/components/Option";
import Buttons from "@/components/Buttons";

export default {
  name: "home",
  components: {
    Carousel,
    Option,
    Buttons
  }
};
</script>

<style lang="scss" scoped>
* {
  font-size: 1.2rem;
}
.home {
  margin: 16px;
}
.recipes-info{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-top: 20px;
}
.infotext{
  margin-top: 20px;
  font-style: italic;
}
.button-container{
  padding: 0 15px;
  margin: 10px 10px;
}
@font-face {
    font-family: "Signika-Bold";
    src: url("../assets/Fonts/Signika-Bold.ttf");
}
@font-face {
    font-family: "Signika-Semibold";
    src: url("../assets/Fonts/Signika-Semibold.ttf");
}
@font-face {
    font-family: "Signika-Light";
    src: url("../assets/Fonts/Signika-Light.ttf");
}

.recipes {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}
.recipe-1 p {
  margin-bottom: 15px;
}
.Signika-Bold {
    color: rgb(165, 49, 78);
    font-family: "Signika-Bold";
    margin: 20px 0;
    font-size: 1.5rem;
}
.Signika-Semibold {
    color: rgb(184, 102, 122);
    font-family: "Signika-Semibold";
    margin: 5px 0;
}
.Signika-Light {
    color: rgb(0, 0, 0);
    font-family: "Signika-Light";
}
.checkmark {
    list-style-image: url("../assets/Icons/check-mark.png");
}

// tablet
@media (min-width: 768px) and (max-width: 1023px) {
  .recipes {
    flex-direction: row;
  }
  .recipe-1 {
    width: 30%;
  }
}

//Desktop
@media (min-width: 1024px) {
  .recipes {
    flex-direction: row;
  }
  .recipe-1 {
    width: 30%;
  }

  .recipes-info{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 60px 30px;
}

.infotext{
  margin-left: 40px;
  margin-top: 5;
  font-style: italic;
}
}

</style>
