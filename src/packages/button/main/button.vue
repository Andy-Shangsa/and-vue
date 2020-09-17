<!-- 按钮 -->
<script>
import { getCurrentInstance, h, toRefs, inject, computed, unref } from "vue";
/**
 * @props [String] type 按钮类型
 * @props [String] size 按钮尺寸，如：medium、small、mini，默认空
 * @props [String] shape 按钮形状，如：round、circle，默认空
 * @props [Boolean] loading 是否加载中
 * @props [Boolean] disabled 是否禁用
 * @props [Boolean] plain 是否幽灵按钮
 * @props [Boolean] text 是否文本类型
 * @props [Boolean] block 是否块状按钮
 * @props [Boolean] autofocus 是否自动聚焦
 */
export default {
  name: "AndButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (val) =>
        ["default", "primary", "success", "warning", "danger"].includes(val)
    },
    size: {
      type: String,
      default: ""
    },
    shape: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    text: Boolean,
    block: Boolean,
    autofocus: Boolean
  },
  setup(props, { slots }) {
    const { size, disabled } = toRefs(props);
    // 获取按钮尺寸
    const buttonSize = computedButtonSize(size);
    // 是否禁用
    const buttonDisabled = computedButtonDisabled(disabled);
    return () => {
      return h(
        "button",
        {
          class: [
            "and-button",
            "and-button--" + props.type,
            buttonSize.value ? "and-button--" + buttonSize.value : "",
            {
              "is-disabled": buttonDisabled.value,
              "is-plain": props.plain,
              "is-round": props.shape === "round",
              "is-circle": props.shape === "circle",
              "is-block": props.block,
              "is-text": props.text
            }
          ]
        },
        [slots.default ? h("span", slots.default()) : null]
      );
    };
  }
};

const computedButtonSize = (size) => {
  const elFormItem = inject("elFormItem", {});
  const _elFormItemSize = computed(() => {
    return unref(elFormItem.elFormItemSize);
  });
  const buttonSize = computed(() => {
    return (
      size.value ||
      _elFormItemSize.value ||
      (getCurrentInstance().proxy.$ELEMENT || {}).size
    );
  });
  return buttonSize;
};

const computedButtonDisabled = (disabled) => {
  const elForm = inject("elForm", {});
  const buttonDisabled = computed(() => {
    return disabled.value || unref(elForm.disabled);
  });
  return buttonDisabled;
};
</script>
