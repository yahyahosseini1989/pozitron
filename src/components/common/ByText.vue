<template>
  <!-- :hint="hint" خطای نمایشی زیر فیلد -->
  <div class="byField">
    <span class="legend">{{label}}</span>
    <v-text-field
      class="byText"
      :value="value"
      :placeholder="placeholder"
      outlined
      dense
    >
      <template slot="append">
        <v-icon class="byAppendIcon" @click="appendIconCallback">mdi-paperclip</v-icon>
        <!-- <v-icon @click="appendIconCallback">mdi-close</v-icon> -->
      </template>
      <!-- @click:prepend="prependIconCallback" -->
      <!-- prepend-icon="mdi-phone" -->
    </v-text-field>

  </div>
</template>

<script>
export default {
  name: "ByText",
  props: {
    value: { type: String, default: "" },
    label: { type: String, default: "" },
    // hint: { type: String, default: "این فیلد ضروری می باشد" },
    // messages: { type: String, default: "این فیلد ضروری می باشد" },
    placeholder: { type: String, default: "" },
  },
  methods: {
    appendIconCallback() {
      this.$emit("append", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>