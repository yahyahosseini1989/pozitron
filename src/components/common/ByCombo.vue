<template>
  <!-- :persistent-hint="persistentHint" -->
  <v-combobox
    :label="label"
    :clearable="clearable"
    :hide-selected="hideSelected"
    :multiple="multiple"
    :small-chips="smallChips"
    :items="options"
    outlined
    dense
  >

  </v-combobox>
</template>

<script>
export default {
  name: "ByCombo",
  props: {
    label: { type: String, default: "" },
    persistentHint: { type: String, default: "این فیلد ضروری می باشد" },
    value: { type: Array }, // , require: true
    options: { type: Array }, // , require: true
    clearable: { type: Boolean, default: false },
    hideSelected: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    smallChips: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
</style>