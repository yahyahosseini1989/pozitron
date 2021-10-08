<template>
  <div :class="className">
    <v-switch
      :value="value"
      @input="updateText"
      inset
      flat
      :loading="loading"
      :label="label"
      dense
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BySwitch",
  props: {
    className: { type: String, default: "" },
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