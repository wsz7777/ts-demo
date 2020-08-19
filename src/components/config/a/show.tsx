import { Vue, Component, Prop } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";

@Component
class AShow extends Vue {
  name = "AShow";

  @Prop(Object) settingData: SettingData | undefined;

  render() {
    return (
      <div class="AShow">
        <img src={this.settingData?.imgSrc} alt="" />
      </div>
    );
  }
}

export default AShow;
