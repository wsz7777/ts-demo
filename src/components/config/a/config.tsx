import { Vue, Component, Prop } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";

@Component
class AConfig extends Vue {
  name = "AConfig";

  @Prop(Object) editData: SettingData | undefined;

  render() {
    return <div class="AConfig">here config something</div>;
  }
}

export default AConfig;
