<template>
  <div class="button-container">
    <button :class="iconname"><i :class="icon"></i></button>
    <span>{{iconText}}</span>
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
    }
  }
};
</script>

<style lang="scss">

button{
   background: transparent;
   border: none;
   font-size: 25px;    
}

.button-container{
  list-style-type: none;
  background: #ee2461;
  border-radius: 40px;
  float: left;
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  margin: 0px 5px 0px 5px;
}

div button:hover {
  box-shadow: #555555 0 0 6px;
}

div button a {
  text-indent: -9999px;
  width: 42px;
  height: 42px;
  display: block;
  background-repeat: no-repeat;
  cursor: pointer;
}

</style>