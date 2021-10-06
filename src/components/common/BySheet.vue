<template>
  <v-sheet class="bySheet">
    <div :class="`${title ? 'hasBorder' : 'd-none'} subtitle`">
      <h5 class="pt-3 px-3">{{ title }}</h5>
    </div>
    <div :class="`${title ? 'pa-5' : 'px-5'} ${className}`">
      <slot />
    </div>
  </v-sheet>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BySheet",
  props: {
    title: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>
