<template>
  <div class="button-container">
    <router-link :to="iconRouter">
      <span :class="iconname" class="icon-wrapper">
        <i :class="icon"></i>
      </span>
      <span v-if="iconText" class="button-description">{{iconText}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    iconname: {
      type: String,
      default: ""
    },
    iconText: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconRouter: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="scss">
a {
  display: flex;
  color: white;
  text-decoration: none;
}

.icon-wrapper {
  color: white;
  background: transparent;
  border: none;
  font-size: 25px;
}

.button-container {
  list-style-type: none;
  background: #ee2461;
  border-radius: 40px;
  float: left;
  width: auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin: 0px 5px 0px 5px;
}

div .icon-wrapper:hover {
  box-shadow: #555555 0 0 6px;
}

div .icon-wrapper a {
  text-indent: -9999px;
  width: 42px;
  height: 42px;
  display: block;
  background-repeat: no-repeat;
  cursor: pointer;
}

.button-description {
  margin-left: 5px;
}

@media (min-width: 1024px) {
  //Desktop
  .button-container {
    height: 50px;
  }
}
</style>
