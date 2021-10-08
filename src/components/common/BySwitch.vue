<template>
  <div :class="className">
    <v-switch
      v-model="currentValue"
      inset
      flat
      :loading="loading"
      :label="label"
      dense
      color="blue darken-1"
      class="bySwitch"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BySwitch",
  data() {
    return {
      updateSwitch: null,
    };
  },
  props: {
    className: { type: String, default: "" },
    value: { type: Boolean, default: false },
    label: { type: String, default: "" },
    loading: { type: Boolean, default: false },
  },
  computed: {
    currentValue() {
      return this.value;
    },
  },
  methods: {
    updateText($value) {
      this.$emit("input", $value);
    },
  },
};
</script>
