<template>
  <!-- :hint="hint" خطای نمایشی زیر فیلد -->
  <div :class="className">
    <div class="byField">
      <span :class="`legend ${disabled ? 'isDisabled' : ''}`">{{ label }}</span>
      <v-text-field
        class="byText"
        :value="value"
        @input="updateText"
        :placeholder="placeholder"
        outlined
        :disabled="disabled"
        :hide-details="hideDetails"
        dense
      >
        <template
          slot="append"
          v-if="hasButton"
        >
          <!-- <v-btn
            depressed
            elevation="2"
            icon
            outlined
            plain
            raised
            tile
          > -->

            <v-icon
              class="byAppendIcon"
              @click="appendIconCallback"
            >{{
            icon
          }}</v-icon>
          <!-- </v-btn> -->
          <!-- <v-icon @click="appendIconCallback">mdi-close</v-icon> -->
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "ByText",
  props: {
    className: { type: String, default: "" },
    value: { type: String, default: "" },
    label: { type: String, default: "" },
    // hint: { type: String, default: "این فیلد ضروری می باشد" },
    // messages: { type: String, default: "این فیلد ضروری می باشد" },
    placeholder: { type: String, default: "" },
    hasButton: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    hideDetails: { type: Boolean, default: true },
    icon: { type: String, default: "" },
  },
  data() {
    return {
      messages: false,
    };
  },
  methods: {
    appendIconCallback() {
      this.$emit("append", this.value);
    },
    updateText($value) {
      this.$emit("input", $value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>