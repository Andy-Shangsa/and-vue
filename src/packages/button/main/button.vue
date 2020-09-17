<!-- 按钮 -->
<script>
import { getCurrentInstance, h, toRefs, inject, computed, unref } from "vue";
/**
 * @props [String] type 按钮类型
 * @props [String] size 按钮尺寸，如：medium、small、mini，默认空
 * @props [String] shape 按钮形状，如：round、circle，默认空
 * @props [String] icon 图标
 * @props [String] nativeType 原生类型
 * @props [Boolean] loading 是否加载中
 * @props [Boolean] disabled 是否禁用
 * @props [Boolean] plain 是否幽灵按钮，注：对text按钮不生效
 * @props [Boolean] text 是否文本类型
 * @props [Boolean] block 是否块状按钮
 * @props [Boolean] autofocus 是否自动聚焦
 * @event click 点击事件
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
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    text: Boolean,
    block: Boolean,
    autofocus: Boolean
  },
  setup(props, { emit, slots }) {
    const { size, disabled } = toRefs(props);
    // 获取按钮尺寸
    const buttonSize = computedButtonSize(size);
    // 是否禁用
    const buttonDisabled = computedButtonDisabled(disabled);
    const handleClick = (evt) => {
      emit("click", evt);
    };
    return {
      buttonSize,
      buttonDisabled,
      handleClick
    };
  },
  render() {
    return h(
      "button",
      {
        onClick: this.handleClick,
        class: [
          "and-button",
          "and-button--" + this.type,
          this.buttonSize ? "and-button--" + this.buttonSize : "",
          {
            "is-disabled": this.buttonDisabled,
            "is-plain": !this.text && this.plain,
            "is-round": this.shape === "round",
            "is-circle": this.shape === "circle",
            "is-block": this.block,
            "is-text": this.text,
            "is-loading": this.loading
          }
        ],
        disabled: this.buttonDisabled || this.loading,
        type: this.nativeType,
        autofocus: this.autofocus
      },
      [
        this.loading ? h("i", { class: "and-icon-loading" }) : null,
        this.icon && !this.loading ? h("i", { class: this.icon }) : null,
        this.$slots.default ? h("span", this.$slots.default()) : null
      ]
    );
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
