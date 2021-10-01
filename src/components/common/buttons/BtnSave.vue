<template>
  <v-btn
    v-if="!hideSave"
    :depressed="depressed"
    class="btn-save btn--save"
    :class="customClass"
    @click="click"
  >
    <v-icon
      small
      class="ml-2"
      v-if="!hideIcon"
    >
      mdi-check-circle-outline
    </v-icon>
    <slot>{{ label }}</slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "ذخیره",
    },
    customClass: {
      type: String,
      default: "",
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    hideSave: {
      type: Boolean,
      default: false,
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click(value) {
      this.$emit("click", value);
    },
  },
};
</script>
