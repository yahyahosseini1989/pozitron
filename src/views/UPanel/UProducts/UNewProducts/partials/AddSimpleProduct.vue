<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container>
        <v-row>
          <v-toolbar-title>ساخت محصول</v-toolbar-title>
          <v-spacer></v-spacer>
          <btn-save
            label="ذخیره اطلاعات"
            @click="save"
            class="mx-2"
          />
          <btn-cancel
            @click="cancel"
          />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="8">
          <v-sheet
            min-height="70vh"
            rounded="lg"
          >
            <h5>مشخصات کلی</h5>
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-sheet
            min-height="70vh"
            rounded="lg"
          >
            <h5>دسته‌بندی‌ها و برچسب‌گذاری‌ها</h5>
          </v-sheet>
        </v-col>

        <v-col cols="12">
          <v-sheet rounded="lg">
            <v-checkbox
              v-model="moreProducts"
              label="می خواهم چندین محصول را در یک خانواده وارد کنم."
            ></v-checkbox>
          </v-sheet>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AddSimpleProduct",
  data: () => ({
    moreProducts: false,
  }),
  methods: {
    save() {},
    cancel() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
