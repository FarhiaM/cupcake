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

<style lang="scss">
// It can not be scoped. The style not apply in the view I am using it.
.cupcake-banner-image {
  width: 100%;
}
.VueCarousel-navigation .VueCarousel-navigation-button {
  color:#ee2461 !important;
  font-size: 23px !important;
}
.VueCarousel-navigation .VueCarousel-navigation-next {
  right: 35px !important;
}
.VueCarousel-navigation .VueCarousel-navigation-prev {
  left: 35px !important;
}
// tablet
@media (min-width: 768px) and (max-width: 1023px) {
  .VueCarousel-navigation .VueCarousel-navigation-button {
    font-size: 25px !important;
  }
}

//Desktop
@media (min-width: 1024px) {
  .VueCarousel-navigation .VueCarousel-navigation-button {
  font-size: 40px !important;
  }
  .VueCarousel-navigation .VueCarousel-navigation-next {
    right: 60px !important;
  }
  .VueCarousel-navigation .VueCarousel-navigation-prev {
    left: 60px !important;
  }
}
</style>
