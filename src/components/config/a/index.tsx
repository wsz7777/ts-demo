import { Vue, Component, Prop } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";

@Component({
  components: {
    "a-show": () => import("./show"),
    "a-config": () => import("./config")
  }
})
class AIndex extends Vue {
  name = "AIndex";
  @Prop(Object) readonly moduleData: SettingData | undefined;

  render() {
    return (
      <div class="AIndex">
        <div class="showBox">
          <a-show settingData={this.moduleData} />
        </div>
        <div class="configBox">
          <a-config editData={this.moduleData} />
        </div>
      </div>
    );
  }
}

export default AIndex;
