<template>
  <!-- :persistent-hint="persistentHint" -->
  <div class="byField">
    <span class="legend">{{ label }}</span>
    <v-combobox
      label=""
      :clearable="clearable"
      :hide-selected="hideSelected"
      :multiple="multiple"
      :small-chips="smallChips"
      :items="options"
      :value="value"
      @input="updateText"
      outlined
      dense
      :placeholder="placeholder"
    >
    </v-combobox>
  </div>
</template>

<script>
export default {
  name: "ByCombo",
  props: {
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    persistentHint: { type: String, default: "این فیلد ضروری می باشد" },
    value: { type: String }, // , require: true
    options: { type: Array }, // , require: true
    clearable: { type: Boolean, default: false },
    hideSelected: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    smallChips: { type: Boolean, default: false },
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