<!-- 按钮 -->
<script>
import { h } from "vue";
export default {
  name: "AndButton",
  setup(props, ctx) {
    return () => {
      return h("button", { class: "and-button" }, [
        ctx.slots.default ? h("span", ctx.slots.default()) : null
      ]);
    };
  }
};
</script>
