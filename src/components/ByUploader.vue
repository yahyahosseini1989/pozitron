<!-- https://www.npmjs.com/package/vue-upload-drop-images -->

<template>
  <div class="byUploader">
    <UploadImages
      uploadMsg="عکس را اینجا رها کن"
      :max="1"
      maxError=".فقط یک تصویر برای آپلود مجاز میباشد"
      @changed="handleImages"
    />
    <!-- <UploadImages
      :max="max"
      :uploadMsg="uploadMsg"
      :maxError="maxError"
      :fileError="fileError"
      :clearAll="clearAll"
    /> -->
  </div>
</template>

<script>
import UploadImages from "vue-upload-drop-images";

export default {
  name: "ByUploader",
  components: {
    UploadImages,
  },
  props: {
    max: {
      type: Number,
      default: 1,
    },
    uploadMsg: {
      type: String,
    },
    maxError: {
      type: String,
    },
    fileError: {
      type: String,
    },
    clearAll: {
      type: String,
    },
  },
  data() {
    return {
      hasImage: false,
      image: null,
    };
  },
  methods: {
    handleImages(files) {
      console.log(files);
      this.$emit("files", files);
      /*
        [
        {
            "name": "Screenshot from 2021-02-23 12-36-33.png",
            "size": 319775,
            "type": "image/png",
            "lastModified": 1614080193596
            ...
        },
        ...
        ]
        */
    },
  },
};
</script>

<style>
</style>