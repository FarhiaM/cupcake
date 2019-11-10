<template>
  <div class="carousel">
    <carousel
      :per-page="1"
      autoplay
      :autoplayTimeout="3000"
      loop
      paginationActiveColor="#ff4674"
      paginationColor="#ffc0cb"
      :paginationSize="12"
      paginationPosition="bottom-overlay"
      :navigationEnabled="true"
    >
      <slide>
        <img
          class="cupcake-banner-image"
          src="@/assets/Banner/01.jpg"
          alt="Picture of cupcake dough"
        />
      </slide>
      <slide>
        <img
          class="cupcake-banner-image"
          src="@/assets/Banner/02.jpg"
          alt="Picture of cupcake dough"
        />
      </slide>
      <slide>
        <img
          class="cupcake-banner-image"
          src="@/assets/Banner/03.jpg"
          alt="Picture of cupcake dough"
        />
      </slide>
      <slide>
        <img
          class="cupcake-banner-image"
          src="@/assets/Banner/04.jpg"
          alt="Picture of cupcake dough"
        />
      </slide>
      <slide>
        <img
          class="cupcake-banner-image"
          src="@/assets/Banner/05.jpg"
          alt="Picture of cupcake dough"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style>
.cupcake-banner-image {
  width: 100%;
}
.VueCarousel-navigation .VueCarousel-navigation-button {
  color:#ee2461;
  font-size: 40px;
}
.VueCarousel-navigation .VueCarousel-navigation-next {
  right: 60px;
}
.VueCarousel-navigation .VueCarousel-navigation-prev {
  left: 60px;
}
</style>
