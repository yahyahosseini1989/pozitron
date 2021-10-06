<template>
  <div :class="className">
    <v-checkbox
      class="byCheckbox"
      :value="value"
      @input="updateText"
      :label="label"
      :rules="rules"
      :required="required"
      :color="color"
    >
    </v-checkbox>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "ByCheckbox",
  props: {
    className: { type: String, default: "" },
    value: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    label: { type: String, default: "" },
    color: { type: String, default: "#2563eb" },
    loading: { type: Boolean, default: false },
  },
  methods: {
    updateText($value) {
      this.$emit("input", $value);
    },
  },
  computed: {
    rules() {
      if (this.required) {
        return [(v) => !!v || "این فیلد ضروری میباشد."];
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>