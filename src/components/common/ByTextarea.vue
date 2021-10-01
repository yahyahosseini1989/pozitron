<template>
  <v-textarea
    outlined
    :label="label"
    :value="value"
    :placeholder="placeholder"
    dense
  ></v-textarea>
</template>

<script>
export default {
  name: "ByTextarea",
  props: {
    label: { type: String, default: "" },
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
</style>