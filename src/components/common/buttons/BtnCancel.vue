<template>
  <v-btn
    v-if="!hideCancel"
    :depressed="depressed"
    class="btn-cancel btn--cancel"
    :class="customClass"
    @click="click"
  >
    <v-icon
      small
      class="ml-2"
      v-if="!hideIcon"
    >
      mdi-close-circle-outline
    </v-icon>
    <slot>{{ label }}</slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "لغو",
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
      default: true,
    },
    hideCancel: {
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
