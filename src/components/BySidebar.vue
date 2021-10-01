<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    class="by-sidebar"
    mini-variant
  >
    <router-link to="/">
      <v-icon
        class="by-icon"
        size="30px"
      >
        mdi-storefront-outline 
      </v-icon>
    </router-link>
    <router-link to="/UNewProduct">
      <v-icon
        class="by-icon"
        size="30px"
      >
        mdi-mailbox-outline
      </v-icon>
    </router-link>
    <router-link to="/UNewProduct">
      <v-icon
        class="by-icon"
        size="30px"
      >
        mdi-newspaper-variant-outline 
      </v-icon>
    </router-link>
    <router-link to="/UNewProduct">
      <v-icon
        class="by-icon"
        size="30px"
      >
        mdi-account-multiple-outline 
      </v-icon>
    </router-link>
    <router-link to="/UNewProduct">
      <v-icon
        class="by-icon"
        size="30px"
      >
        mdi-cog-outline
      </v-icon>
    </router-link>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "BySidebar",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>