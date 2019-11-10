<template>
  <div class="carousel">
    <carousel :per-page=1 autoplay :autoplayTimeout=3000 loop paginationActiveColor="#ff4674" paginationColor="#ffc0cb" :paginationSize=12 paginationPosition="bottom-overlay">
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
.cupcake-banner {
  margin-top: 20px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.cupcake-banner-image {
  width: 100%;
}
</style>
