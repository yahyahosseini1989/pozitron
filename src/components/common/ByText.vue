<template>
  <!-- :hint="hint" خطای نمایشی زیر فیلد -->
  <div :class="className">
    <div class="byField">
      <span :class="`legend ${disabled ? 'isDisabled' : ''}`">{{ label }}</span>
      <v-text-field
        :value="value"
        @input="updateText"
        :placeholder="placeholder"
        outlined
        :disabled="disabled"
        :hide-details="hideDetails"
        dense
        class="byText"
        :min="min"
        :max="max"
        :type="type"
      >
        <template
          slot="append"
          v-if="hasButton"
          style="position:relative; z-index:1;"
        >
          <v-btn
              @click="appendIconCallback"
            :class="`appendButton ${disabledButton ? 'notAllowed' : ''}`"
            depressed
            icon
            outlined
            plain
            raised
            tile
            :disabled="disabledButton"
          >

            <v-icon
              class="byAppendIcon"
            >{{
            icon
          }}</v-icon>
          </v-btn>
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
    disabledButton: { type: Boolean, default: false },
    hideDetails: { type: Boolean, default: true },
    icon: { type: String, default: "" },
    type: { type: String, default: "" },
    min: { type: Number, default: 0 },
    max: { type: Number },
  },
  data() {
    return {
      messages: false,
    };
  },
  methods: {
    appendIconCallback() {
      alert()
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