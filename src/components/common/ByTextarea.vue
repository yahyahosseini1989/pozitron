<template>
  <div class="byField">
    <span class="legend">{{ label }}</span>
    <v-textarea
      outlined
      :value="value"
      @input="updateText"
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
  methods: {
    updateText($value) {
      this.$emit("input", $value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>