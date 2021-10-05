<template>
  <v-sheet
    class="bySheet "
  >
    <div :class="`${title ? 'hasBorder' : 'd-none'} subtitle`">
      <h5 class="pt-3 px-3">{{ title }}</h5>
    </div>
    <div class="bySheetBody px-2">
      <slot />
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "BySheet",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
