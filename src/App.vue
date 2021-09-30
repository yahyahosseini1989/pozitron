<template>
  <v-app id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      class="pt-4"
      color="blue lighten-0"
      mini-variant
    >
      <router-link to="/">
        <v-icon
          large
          color="blue darken-2"
        >
          mdi-domain
        </v-icon>
      </router-link>
      <router-link to="/UNewProduct">
        <v-icon
          large
          color="blue darken-2"
        >
          mdi-domain
        </v-icon>
      </router-link>

    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
