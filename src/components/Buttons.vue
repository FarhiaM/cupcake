<template>
  <div class="button">
    <li :class="iconname"><router-link to="/"></router-link></li>
    {{iconText}}
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
    }
  }
};
</script>

<style lang="scss">

.button{
  list-style-type: none;
  background: #ee2461;
  border-radius: 40px;
  float: left;
  margin-left: 10px;
}

div li:hover {
  box-shadow: #555555 0 0 6px;
}

div li a {
  text-indent: -9999px;
  width: 42px;
  height: 42px;
  display: block;
  background-repeat: no-repeat;
  cursor: pointer;
}

.icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 0;
  margin: 0;
}


.icon-house {
  background-image: url("../assets/Icons/house.png");
  background-position: center;
  background-repeat: no-repeat;
}

.icon-compass-arrow {
  background-image: url("../assets/Icons/compass-arrow.png");
  background-position: center;
  background-repeat: no-repeat;
}

.icon-file {
  background-image: url("../assets/Icons/file.png");
  background-repeat: no-repeat;
  background-position: center;
}

.icon-question-mark {
  background-image: url("../assets/Icons/question-mark.png");
  background-repeat: no-repeat;
  background-position: center;
}

.icon-person {
  background-image: url("../assets/Icons/person.png");
  background-repeat: no-repeat;
  background-position: center;
}

.icon-house {
  background-image: url("../assets/Icons/house.png");
}

.icon-compass-arrow {
  background-image: url("../assets/Icons/compass-arrow.png");
 }

.icon-file {
  background-image: url("../assets/Icons/file.png");
}

.icon-question-mark {
  background-image: url("../assets/Icons/question-mark.png");
}

.icon-person {
  background-image: url("../assets/Icons/person.png");
}

</style>