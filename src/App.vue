<template>
  <div id="app">
    <!--Component Custom Header -->
    <dan-header v-sticky:top />
    <!--show navigation page view-->
    <router-view />
    <!--component Custom notification-->
    <dan-notification-container />
    <!--component footer-->
    <dan-footer v-sticky:bottom />
  </div>
</template>
<script>
import DanHeader from "@/layouts/DanHeader.vue";
import DanFooter from "@/layouts/DanFooter.vue";
import DanNotificationContainer from "./components/DanNotificationContainer.vue";
export default {
  name: "App",
  components: {
    DanFooter,
    DanHeader,
    DanNotificationContainer
  }
};
</script>
<style>
.app-header {
  margin-bottom: 45px;
}
body {
  margin: 45px 0 45px 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nprogress .div {
  background: purple;
}
</style>
