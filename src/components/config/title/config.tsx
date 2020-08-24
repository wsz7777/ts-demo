import { Vue, Component, Model, Watch } from "vue-property-decorator";
import { TitleModuleData } from "@/components/config/configModule";
import { Input, Button } from "ant-design-vue";
import lodash from "lodash"

Vue.use(Input).use(Button);

@Component 
class AConfig extends Vue {
  name = "AConfig";

  // @Prop({ type: Object, default: () => ({ imgSrc: "" }) })
  @Model("update", {
    type: Object,
    default: () => ({
      data: { content: "这是标题" },
      style: [
        { styleName: "font-size", defaultValue: "14px" },
        { styleName: "font-weight", defaultValue: "bold" }
      ]
    })
  })
  readonly editData!: TitleModuleData;
  
  get modelData() {
    // return Object.assign({}, this.editData);
    return lodash.cloneDeep(this.editData);
  }
  fontSize = this.modelData.style.find(v => v.styleName === "font-size")
    ?.defaultValue;
  fontWeight = this.modelData.style.find(v => v.styleName === "font-weight")
    ?.defaultValue;
  @Watch("fontSize", { immediate: true, deep: true })
  onChangeFontSize(val: any) {
    //@ts-ignore
    this.modelData.style.find(
      v => v.styleName === "font-size"
    ).defaultValue = val;
  }
  @Watch("fontWeight", { immediate: true, deep: true })
  onChangeFontWeight(val: any) {
    //@ts-ignore
    this.modelData.style.find(
      v => v.styleName === "font-weight"
    ).defaultValue = val;
  }

  render() {
    console.log(
      "JSON.stringify(this.modelData): ",
      JSON.stringify(this.modelData),
      this.modelData
    );

    return (
      <div class="AConfig">
        <p>here config something</p>

        <div>
          内容
          <a-input v-model={this.modelData.data.content} />
        </div>
        <div>
          字体大小
          <a-input v-model={this.fontSize} />
        </div>
        <div>字体宽度<a-input v-model={this.fontWeight}></a-input></div>
        <a-button
          on-click={() => {
            this.$emit("update", this.modelData);
          }}
        >
          提交变更
        </a-button>
      </div>
    );
  }
}

export default AConfig;
