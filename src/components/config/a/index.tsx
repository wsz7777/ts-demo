import { Vue, Component, Prop, Model } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";

@Component({
  components: {
    "a-show": () => import("./show"),
    "a-config": () => import("./config")
  }
})
class AIndex extends Vue {
  name = "AIndex";
  // @Prop({ type: Object, default: () => ({ imgSrc: "" }) })
  @Model("item-change", { type: Object, default: () => ({ imgSrc: "" }) })
  readonly moduleData!: SettingData;

  get moduleDataCopy() {
    return { ...this.moduleData };
  }

  render() {
    return (
      <div class="AIndex">
        <div class="showBox">
          <a-show settingData={this.moduleDataCopy} />
        </div>
        <div class="configBox">
          <a-config
            editData={this.moduleDataCopy}
            on-update={(event: SettingData) => {
              console.log("data", event);
              this.$emit("item-change", event);
            }}
            // v-model={this.modelDataCopy}
            // v-model={this.moduleDataCopy}
          />
        </div>
      </div>
    );
  }
}

export default AIndex;
