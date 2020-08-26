import { Vue, Component, Model, Watch } from "vue-property-decorator";
import { TitleModuleData } from "@/components/config/configModule";
import { Input, Button } from "ant-design-vue";
import S from "../config.module.scss";
import lodash from "lodash";

Vue.use(Input).use(Button);

@Component
class AConfig extends Vue {
  name = "AConfig";

  // @Prop({ type: Object, default: () => ({ imgSrc: "" }) })
  @Model("update", {
    type: Object,
    default: () => ({
      data: { content: "这是标题" },
      style: {
        titleSty: {
          fontWeight: "bold",
          fontSize: "14px",
          color: "#243563"
        }
      }
    })
  })
  readonly editData!: TitleModuleData;

  get modelData() {
    // return Object.assign({}, this.editData);
    return lodash.cloneDeep(this.editData);
  }

  render() {
    return (
      <div class="AConfig">
        <div class={S.header}>{this.modelData.title}</div>

        <div class={S.line}>
          <span>左图标:</span>
          <a-input
            size="small"
            class={S.input}
            v-model={this.modelData.data.leftIcon}
          />
        </div>
        <div class={S.line}>
          <span>右图标:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.data.rightIcon}
          />
        </div>
        <div class={S.line}>
          <span>内容:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.data.content}
          />
        </div>
        <div class={S.line}>
          <span>文字宽度:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.titleSty.fontWeight}
          />
        </div>
        <div class={S.line}>
          <span>文字大小:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.titleSty.fontSize}
          />
        </div>
        <div class={S.line}>
          <span>字体:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.titleSty.fontFamily}
          />
        </div>
        <div class={S.line}>
          <span>文字颜色:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.titleSty.color}
          />
        </div>
        <div class={S.line}>
          <span>图片宽度:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.imgSty.width}
          />
        </div>
        <div class={S.line}>
          <span>图片高度:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.imgSty.height}
          />
        </div>
        <div class={S.line}>
          <span>图片与文字间距:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.imgSty.marginRight}
          />
        </div>
        <div class={S.line}>
          <span>内间距:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.boxSty.padding}
          />
        </div>
        <div class={S.line}>
          <span>背景图片:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.boxSty.background}
          />
        </div>
        <div class={S.line}>
          <span>对齐方式:</span>
          <a-input
            class={S.input}
            size="small"
            v-model={this.modelData.style.boxSty.justifyContent}
          />
        </div>
        <div class={S.footer}>
          <a-button
            type="primary"
            size="small"
            on-click={() => {
              this.$emit("update", this.modelData);
            }}
          >
            提交变更
          </a-button>
        </div>
      </div>
    );
  }
}

export default AConfig;
