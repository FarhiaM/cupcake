<template>
  <div class="home">
    <carousel />

    <h3 class="Signika-Bold">Meet some candy options</h3>

    <div class="recipes">
      <Option
        title="Option A"
        description="Tart marzipan tart pastry cake jelly-o. Sugar plum pudding macroon liqriouse I love. Pastry dessert cookie tart. I love I love topping danish."
        :ingredients="['Candy cane cheesecake', 'Apple pie wafer', 'Tiramisu cupcake', 'Lemon drops faroki']"
      >
        <Buttons slot="button" iconText="See more" icon="fas fa-plus-circle"></Buttons>
      </Option>

      <Option
        title="Option B"
        description="Halvah wypas pudding I love candy toffee. Jelly beans chupa chups pudding danish I love donut. I love danish bonbon jelly-o I love gummies cotton candy marzipan danish. Donut sweet pastry jujubes croissant."
        :ingredients="['Tootsie roll cheesecake', 'hupa chups wafer', 'Danish marzipan']"
      >
        <Buttons slot="button" iconText="See more" icon="fas fa-plus-circle"></Buttons>
      </Option>

      <Option
        title="Option C"
        description="Liquorice toffee marzipan lemon drops chocolate cake ice crearri."
        :ingredients="['Chocolate marzipan jelly', 'Sweet lollipop ice cream', 'Souffié jelly-o bear clave sweet', 'Brownie pie gummi bears', 'Jelly beans dragée' ]"
      >
        <Buttons slot="button" iconText="See more" icon="fas fa-plus-circle"></Buttons>
      </Option>
    </div>

    <div class="recipes-info">
      <Buttons slot="button" iconText="Make a taste" icon="far fa-heart" style="margin: 0px"></Buttons>
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
.recipes-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-top: 20px;
}
.infotext {
  margin-top: 20px;
  font-style: italic;
}
.button-container {
  padding: 0 15px;
  margin: 10px 10px;
}
@font-face {
  font-family: "Signika-Bold";
  src: url("../assets/Fonts/Signika-Bold.ttf");
}
.recipes {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}
.Signika-Bold {
  color: rgb(165, 49, 78);
  font-family: "Signika-Bold";
  margin: 20px 0;
  font-size: 1.5rem;
}

// tablet
@media (min-width: 768px) and (max-width: 1023px) {
  .recipes {
    flex-direction: row;
  }
}

//Desktop
@media (min-width: 1024px) {
  .recipes {
    flex-direction: row;
  }
  .recipes-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 60px 30px;
  }
  .infotext {
    margin-left: 40px;
    margin-top: 5;
    font-style: italic;
  }
}
</style>
