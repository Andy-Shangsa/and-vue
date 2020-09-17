<template>
  <div>
    <div class="row">
      <and-button
        type="primary"
        text
        icon="and-icon and-icon-edit"
      >primary</and-button>
      <and-button
        type="success"
        text
      >success</and-button>
      <and-button
        type="warning"
        text
      >warning</and-button>
      <and-button
        type="danger"
        text
      >danger</and-button>
      <and-button text>default</and-button>
      <and-button
        type="primary"
        text
        plain
      >primary</and-button>
      <and-button
        type="success"
        text
        plain
      >success</and-button>
      <and-button
        type="warning"
        text
        plain
      >warning</and-button>
      <and-button
        type="danger"
        text
        plain
      >danger</and-button>
      <and-button
        text
        plain
      >default</and-button>
    </div>
    <div class="row">
      <and-button icon="and-icon and-icon-edit" type="primary" loading>主要按钮</and-button>
      <and-button type="success" loading>success</and-button>
      <and-button type="warning">warning</and-button>
      <and-button type="danger">danger</and-button>
      <and-button>default</and-button>
    </div>

    <div class="row">
      <and-button
        type="primary"
        disabled
      >primary</and-button>
      <and-button
        type="success"
        disabled
      >success</and-button>
      <and-button
        type="warning"
        disabled
      >warning</and-button>
      <and-button
        type="danger"
        disabled
      >danger</and-button>
      <and-button disabled>default</and-button>
    </div>

    <div class="row">
      <and-button
        type="primary"
        plain
      >primary</and-button>
      <and-button
        type="success"
        plain
      >success</and-button>
      <and-button
        type="warning"
        plain
      >warning</and-button>
      <and-button
        type="danger"
        plain
      >danger</and-button>
      <and-button plain>default</and-button>
    </div>

    <div class="row">
      <and-button
        type="primary"
        plain
        disabled
      >primary</and-button>
      <and-button
        type="success"
        plain
        disabled
      >success</and-button>
      <and-button
        type="warning"
        plain
        disabled
      >warning</and-button>
      <and-button
        type="danger"
        plain
        disabled
      >danger</and-button>
      <and-button
        plain
        disabled
      >default</and-button>
    </div>

    <div class="row">
      <and-button type="danger">danger</and-button>
      <and-button
        type="primary"
        size="medium"
      >primary</and-button>
      <and-button
        type="success"
        size="small"
      >success</and-button>
      <and-button
        type="warning"
        size="mini"
      >warning</and-button>
    </div>

    <div class="row">
      <and-button
        type="danger"
        shape="round"
      >danger</and-button>
      <and-button
        type="primary"
        size="medium"
        shape="round"
      >primary</and-button>
      <and-button
        type="success"
        size="small"
        shape="round"
      >success</and-button>
      <and-button
        type="warning"
        size="mini"
        shape="round"
      >warning</and-button>
    </div>
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
<style lang="scss">
.row {
  margin: 10px 0;
}
</style>