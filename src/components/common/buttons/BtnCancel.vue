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
  },
  methods: {
    click(value) {
      this.$emit("click", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.btn--cancel {
  background-color: #ffffff !important;
  border: 1px solid #e5e7eb !important;
  color: #374151 !important;
  height: 40px;
  width: 53px;
  border-radius: 6px;
  padding: 8px, 16px, 8px, 16px;

  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  
}
</style>
