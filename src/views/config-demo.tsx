import { Vue, Component } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";

@Component({
  components: {
    "a-index": () => import("@/components/config/a")
  }
})
class ConfigDemo extends Vue {
  name = "ConfigDemo";

  listData: SettingData[] = [
    { imgSrc: "/favicon.ico" },
    { imgSrc: "/favicon.ico" }
  ];

  changeItem(itemData: SettingData, index: number) {
    console.log("config-demo", itemData);
    this.listData.splice(index, 1, itemData);
  }

  render() {
    return (
      <div class="ConfigDemo">
        {this.listData.map((v: SettingData, i: number) => (
          <a-index
            moduleData={v}
            on-item-change={(event: SettingData) => this.changeItem(event, i)}
          />
        ))}
      </div>
    );
  }
}

export default ConfigDemo;
