<template>
  <div>
    <p>
      value: {{value}}</p>
    <p>
      field: {{field}}</p>
    <p> dataItem: {{dataItem}}</p>
    <v-switch
      :value="value"
      @input="updateText"
      inset
      flat
      :loading="loading"
      :label="label"
    ></v-switch>
  </div>
</template>

<script>
export default {
  name: "BySwitch",
  props: {
    field: String,
    dataItem: Object,
    value: { type: Boolean, default: false },
    label: { type: String, default: "" },
    loading: { type: Boolean, default: false },
  },
  data() {
    return {
      model: this.value,
    };
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