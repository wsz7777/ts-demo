import { Vue, Component } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";

@Component({
  components: {
    "a-index": () => import("@/components/config/a")
  }
})
class ConfigDemo extends Vue {
  name = "ConfigDemo";

  listData: SettingData[] = [{ imgSrc: "/favicon.ico" }];

  render() {
    return (
      <div class="ConfigDemo">
        {this.listData.map(v => (
          <a-index moduleData={v} />
        ))}
      </div>
    );
  }
}

export default ConfigDemo;
