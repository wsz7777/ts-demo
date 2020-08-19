import { Vue, Component, Prop, Model } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";
import { Input, Button } from "ant-design-vue";

Vue.use(Input).use(Button);

@Component
class AConfig extends Vue {
  name = "AConfig";

  @Prop({ type: Object, default: () => ({ imgSrc: "" }) })
  // @Model("update", { type: Object, default: () => ({ imgSrc: "" }) })
  readonly editData!: SettingData;

  get modelData() {
    // return Object.assign({}, this.editData);
    return { ...this.editData };
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

        {Object.keys(this.modelData).map(key => (
          <div>
            {key}
            <a-input v-model={this.modelData[key]} />
          </div>
        ))}
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
