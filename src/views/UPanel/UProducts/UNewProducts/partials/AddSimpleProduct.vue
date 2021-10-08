<template>
  <div>
    <v-app-bar color="white" dense class="mb-2" flat>
      <v-container>
        <v-row>
          <v-toolbar-title class="align-center">
            <h4>ساخت محصول</h4>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <btn-save label="ذخیره اطلاعات" @click="save" class="mx-2" />
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
                  label="نام محصول (ضروری)"
                  v-model="model.productName"
                  placeholder="نام محصول مانند: گل، تیشرت و..."
                  hasButton
                  icon="mdi-paperclip"
                  class="mb-6"
                />
                <by-textarea
                  label="توضیحات"
                  v-model="model.productDescription"
                  :rows="3"
                />
              </div>
              <div class="col-md-5">
                <by-uploader @files="getImages"/>
              </div>
            </div>
          </by-sheet>
        </v-col>
        <v-col cols="4">
          <by-sheet title="دسته‌بندی‌ها و برچسب‌گذاری‌ها">
            <by-combo
              placeholder="یک دسته انتخاب کن"
              v-model="model.productCategory"
              :options="categories"
                  class="mb-6"
            />
            <!-- :label="productLabel === '' ? 'دسته' : ''" -->
            <by-combo
              v-model="model.productLabel"
              :options="labels"
              placeholder="یک برچسب انتخاب کن"
            />
            <!-- :label="productLabel === '' ? 'برچسب' : ''" -->
          </by-sheet>
        </v-col>

        <v-col cols="12">
          <by-sheet>
            <div class="d-flex space-between align-center">
              <by-checkbox
                v-model="model.hasMoreProducts"
                label="می خواهم چندین محصول را در یک خانواده وارد کنم."
                class=" mt-2 mb-4"
              />
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </div>
          </by-sheet>
        </v-col>

        <v-col cols="8">
          <by-sheet title="مشخصات تکمیلی">
            <v-row>
              <by-text
                label="بارکد"
                v-model="model.barcode"
                placeholder="تایپ بارکد یا استفاده از بارکدخوان"
                hasButton
                icon="mdi-barcode-scan"
                className="col-md-6"
              />
              <span class="offset-md-6"></span>
              <by-text
                label="قیمت حضوری"
                v-model="model.totalProduct"
                placeholder="تعداد"
                className="col-md-3"
              />
              <by-text
                label="موجودی کل"
                v-model="model.totalProduct"
                placeholder="تعداد"
                className="col-md-3"
              />
              <by-checkbox
                v-model="model.isLimited"
                label="محدودیتی در موجودی ندارم."
                className="col-md-6"
              />
              <by-switch
                label="فروش آنلاین"
                v-model="model.isOnlineSale"
                className="col-md-12 pa-none"
              />
              <by-text
                disabled="isOnlineSale"
                label="قیمت آنلاین"
                v-model="model.onlineFee"
                placeholder="تومان"
                class="col-md-3"
              />
              <by-text
                disabled="isOnlineSale"
                label="موجودی آنلاین"
                v-model="model.onlineExisting"
                placeholder="تعداد"
                class="col-md-3"
              />
            </v-row>
          </by-sheet>
        </v-col>

        <v-col cols="4">
          <by-sheet title="مشخصات حمل و نقل">
            <v-row>
              <by-text
                label="طول"
                v-model="model.totalProduct"
                placeholder="سانتی متر"
                className="col-md-6 col-sm-3 mt-0 pb-0"
              />
              <by-text
                label="عرض"
                v-model="model.totalProduct"
                placeholder="سانتی متر"
                className="col-md-6 col-sm-3"
              />
              <by-text
                label="ارتفاع"
                v-model="model.totalProduct"
                placeholder="سانتی متر"
                className="col-md-6 col-sm-3"
              />
              <by-text
                label="وزن"
                v-model="model.totalProduct"
                placeholder="کیلوگرم"
                className="col-md-6 col-sm-3"
              />
            </v-row>
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
    isOnlineSale: true,
    model: {
      productName: "",
      productDescription: "",
      productImage: null,
      productCategory: null,
      productLabel: null,
      hasMoreProducts: false,
      barcode: "",
      totalProduct: "",
      isLimited: false,
      onlineFee: "",
      onlineExisting: "",
    },
    categories: ["دسته اول", "دسته دوم", "دسته سوم"],
    labels: ["برچسب اول", "برچسب دوم", "برچسب سوم"],
  }),
  methods: {
    save() {
      console.log(this.model);
    },
    getImages(images) {
      return this.model.productImage = images;
    },
    cancel() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
