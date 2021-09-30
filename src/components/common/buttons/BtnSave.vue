<template>
  <v-btn elevation="2" :label="label"></v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'ذخیره'
    },
  }
}
</script>
<style lang="scss" scoped>
.btn--save {
  background-color: var(--q-color-primary);
  border-color: var(--q-color-primary);
  color: #fff;
}
</style>
