<template>
  <div>
    <v-app-bar
      color="white"
      dense
      class=" mb-12"
      flat
    >
      <v-container>
        <v-row>
          <v-toolbar-title class="align-center">
            <h4>ساخت محصول</h4>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <btn-save
            label="ذخیره اطلاعات"
            @click="save"
            class="mx-2"
          />
          <btn-cancel @click="cancel" />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="8">
          <by-sheet title="مشخصات کلی">
            <by-text
              label="نام محصول"
              v-model="model"
              placeholder="نام محصول را وارد نمایید"
            />
            <by-textarea
              label="توضیحات"
              v-model="model"
              placeholder="توضیحات محصول را وارد نمایید"
            />
          </by-sheet>
        </v-col>
        <v-col cols="4">
          <by-sheet title="دسته‌بندی‌ها و برچسب‌گذاری‌ها">
            <by-combo
              label="یک دسته انتخاب کن"
              v-model="دسته"
              :options="categories"
            />
            <by-combo
              label="یک برچسب انتخاب کن"
              v-model="برچسب"
              :options="labels"
            />
          </by-sheet>
        </v-col>

        <v-col cols="12">
          <by-sheet>
            <v-checkbox
              v-model="moreProducts"
              label="می خواهم چندین محصول را در یک خانواده وارد کنم."
            ></v-checkbox>
          </by-sheet>

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
    model: '',
    categories: [
          'دسته اول',
          'دسته دوم',
          'دسته سوم'
        ],
    labels: [
          'برچسب اول',
          'برچسب دوم',
          'برچسب سوم'
        ],
  }),
  methods: {
    save() {},
    cancel() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
