<template>
  <v-switch
    :value="value"
    @input="updateText"
    inset
    flat
    :loading="loading"
    :label="label"
  ></v-switch>
</template>

<script>
export default {
  name: "BySwitch",
  props: {
    value: { type: Boolean, default: false },
    label: { type: String, default: "" },
    loading: { type: Boolean, default: false },
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