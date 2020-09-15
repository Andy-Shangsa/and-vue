<template>
  <div>
    <and-button>测试</and-button>
    <and-button></and-button>
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
