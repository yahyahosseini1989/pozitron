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
            <div class="row">
              <div class="col-md-7">
                <by-text
                  label="نام محصول"
                  v-model="model"
                  placeholder="نام محصول مانند: گل، تیشرت و..."
                />
                <by-textarea
                  label="توضیحات"
                  v-model="model"
                  :rows="3"
                />
              </div>
              <div class="col-md-5">
                <v-card></v-card>
              </div>
            </div>
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
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <v-checkbox
                v-model="moreProducts"
                label="می خواهم چندین محصول را در یک خانواده وارد کنم."
              ></v-checkbox>
              <!-- <v-spacer></v-spacer> -->
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </by-sheet>

        </v-col>
        <v-col cols="12">
          <by-sheet>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <v-checkbox
                v-model="moreProducts"
                label="می خواهم چندین محصول را در یک خانواده وارد کنم."
              ></v-checkbox>
              <!-- <v-spacer></v-spacer> -->
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </by-sheet>

        </v-col>
        <v-col cols="12">
          <by-sheet>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <v-checkbox
                v-model="moreProducts"
                label="می خواهم چندین محصول را در یک خانواده وارد کنم."
              ></v-checkbox>
              <!-- <v-spacer></v-spacer> -->
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </by-sheet>

        </v-col>
        <v-col cols="12">
          <by-sheet>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <v-checkbox
                v-model="moreProducts"
                label="می خواهم چندین محصول را در یک خانواده وارد کنم."
              ></v-checkbox>
              <!-- <v-spacer></v-spacer> -->
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
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
    model: "",
    categories: ["دسته اول", "دسته دوم", "دسته سوم"],
    labels: ["برچسب اول", "برچسب دوم", "برچسب سوم"],
  }),
  methods: {
    save() {},
    cancel() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
