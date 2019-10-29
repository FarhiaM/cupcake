<template>
  <div class="home">
    <div class="cupcake-banner">
      <img class="cupcake-banner-image" src="@/assets/Banner/01.jpg" alt="Picture of cupcake dough">
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {
    
  }
};
</script>

<style scoped>

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