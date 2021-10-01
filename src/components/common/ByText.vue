<template>
  <!-- :hint="hint" خطای نمایشی زیر فیلد -->
  <v-text-field
    class="byText"
    :label="label"
    :value="value"
    :placeholder="placeholder"
    outlined
    dense
  ></v-text-field>
</template>

<script>
export default {
  name: "ByText",
  props: {
    label: { type: String, default: "" },
    hint: { type: String, default: "این فیلد ضروری می باشد" },
    placeholder: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
</style>