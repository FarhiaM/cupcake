<template>
  <div class="option">
    <h3 class="Signika-Semibold">{{ title }}</h3>
    <p class="Signika-Light">{{ description }}</p>
    <ul class="ingredients">
      <li class="checkmark" v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
    </ul>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: "Option",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ingredients: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Signika-Semibold";
  src: url("../assets/Fonts/Signika-Semibold.ttf");
}
.Signika-Semibold {
  color: rgb(184, 102, 122);
  font-family: "Signika-Semibold";
  margin: 5px 0;
}
@font-face {
  font-family: "Signika-Light";
  src: url("../assets/Fonts/Signika-Light.ttf");
}
.Signika-Light {
  color: rgb(0, 0, 0);
  font-family: "Signika-Light";
}
.paragraph {
  margin-bottom: 15px;
}
.checkmark {
  list-style-image: url("../assets/Icons/check-mark.png");
}

// tablet
@media (min-width: 768px) and (max-width: 1023px) {
  .option {
    width: 30%;
  }
}

//Desktop
@media (min-width: 1024px) {
  .option {
    width: 30%;
  }
}
</style>
