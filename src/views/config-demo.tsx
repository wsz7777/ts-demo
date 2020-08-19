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
        {this.listData.map((v: SettingData, i: number) => (
          <a-index
            moduleData={v}
            on-item-change={(event: SettingData) => {
              console.log("config-demo", event);
              this.listData.splice(i, 1, event);
            }}
          />
        ))}
      </div>
    );
  }
}

export default ConfigDemo;
