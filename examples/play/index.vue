<template>
  <div>
    {{input}}
    <and-button></and-button>
    <!-- <el-input
      v-model="input"
      placeholder="请输入内容"
    ></el-input> -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const input = ref(0);
    return { input };
  }
};
</script>
