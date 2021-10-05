<template>
  <div class="byField">
    <span class="legend">{{label}}</span>
    <v-textarea
      outlined
      :value="value"
      :placeholder="placeholder"
      :rows="rows"
      dense
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "ByTextarea",
  props: {
    label: { type: String, default: "" },
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    rows: { type: Number, default: 5 },
  },
};
</script>

<style lang="scss" scoped>
</style>