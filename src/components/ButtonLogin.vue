<template>
  <div class="buttonLogin-container">
    <div v-on:click="openLogin()">
      <span :class="iconname" class="icon-wrapper">
        <i :class="icon"></i>
      </span>
      <span v-if="iconText" class="button-description">{{iconText}}</span>
    </div>
    <div class="login" v-if="showLogin">
      <div>
        <button class="loginClose" v-on:click="closeLogin()">x</button>
      </div>
      <input type="text" placeholder="Email" />
      <button class="loginBtn" v-on:click="closeLogin()">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonLogin",
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
  },
  data() {
    return {
      showLogin: false
    };
  },
  methods: {
    openLogin() {
      this.showLogin = true;
    },
    closeLogin() {
      this.showLogin = false;
    }
  }
};
</script>

<style lang="scss">
.login {
  position: fixed;
  right: 37px;
  top: 148px;
  width: 260px;
  height: 130px;
  background-color: white;
  border: 3px solid #ee2461;
  border-radius: 10px;
  padding: 3%;
  text-align: center;
  z-index: 99;
}
.login div {
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
}
.login .loginClose {
  font-size: 20px;
}
.login input {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ee2461;
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  padding: 5px;
}
.login .loginBtn {
  display: block;
  width: 50%;
  background-color: #ee2461;
  color: white;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 16px;
  padding: 15px;
}
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

.buttonLogin-container {
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

@media (min-width: 768px) and (max-width: 1023px) {
  // tablet
  .login {
    right: 90px;
  }
}

@media (min-width: 1024px) {
  //Desktop
  .buttonLogin-container {
    height: 50px;
  }
  .login {
    right: 32px;
    top: 116px;
  }
}
</style>
