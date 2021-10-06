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
                  v-model="productName"
                  placeholder="نام محصول مانند: گل، تیشرت و..."
                  hasButton
                  icon="mdi-paperclip"
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
              v-model="category"
              :options="categories"
            />
            <by-combo
              label="یک برچسب انتخاب کن"
              v-model="labelss"
              :options="labels"
            />
          </by-sheet>
        </v-col>

        <v-col cols="12">
          <v-sheet style=" border-radius: 8px">
            <div style="display: flex; align-items: center; justify-content: space-between; margin: 0 30px;">
              <v-checkbox
                v-model="moreProducts"
                label="می خواهم چندین محصول را در یک خانواده وارد کنم."
              ></v-checkbox>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="8">
          <by-sheet title="فروش حضوری">
            <v-row class="mb-none">
              <v-col cols="6">
                <by-text
                  label="بارکد"
                  v-model="model"
                  placeholder="تایپ بارکد یا استفاده از بارکد خوان"
                  hasButton
                  icon="mdi-barcode-scan"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <by-text
                  label="موجودی کل"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
              <v-col cols="3">
                <by-text
                  label="موجودی کل"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
              <v-col cols="6">
                <v-checkbox
                  v-model="moreProducts"
                  label="محدودیتی در موجودی ندارم."
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <by-switch
                  v-model="isOnlineSale"
                  label="فروش آنلاین"
                  inset
                />
              </v-col>
              <v-col
                cols="3"
                v-if="isOnlineSale"
              >
                <by-text
                  label="قیمت آنلاین"
                  v-model="model"
                  placeholder="تومان"
                />
              </v-col>
              <v-col
                cols="3"
                v-if="isOnlineSale"
              >
                <by-text
                  label="موجودی آنلاین"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
            </v-row>
          </by-sheet>
        </v-col>

        <v-col cols="4">
          <by-sheet title="مشخصات حمل و نقل">
            <v-row>
              <v-col cols="6">
                <by-text
                  label="موجودی کل"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
              <v-col cols="6">
                <by-text
                  label="موجودی کل"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
              <v-col cols="6">
                <by-text
                  label="موجودی کل"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
              <v-col cols="6">
                <by-text
                  label="موجودی کل"
                  v-model="model"
                  placeholder="تعداد"
                />
              </v-col>
            </v-row>
          </by-sheet>
        </v-col>
        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AddSimpleProduct",
  data: () => ({
    moreProducts: false,
    isOnlineSale: true,
    productName: "",
    model: "",
    category: ["دسته اول"],
    labelss: ["برچسب"],
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
