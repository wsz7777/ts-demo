import { Vue, Component } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";
import { createConfigModule } from "@/components/config/mountModule";
import { Button } from "ant-design-vue";
Vue.use(Button);

@Component
class ConfigDemo extends Vue {
  name = "ConfigDemo";

  listData: SettingData[] = [
    // { type: "", name: "a", imgSrc: "/favicon.ico" },
    // { type: "", name: "a", imgSrc: "/favicon.ico" }
  ];

  changeItem(itemData: SettingData, index: number) {
    console.log("config-demo", itemData);
    this.listData.splice(index, 1, itemData);
  }

  render() {
    return (
      <div class="ConfigDemo">
        <a-button
          on-click={() => {
            import("@/assets/data/pageData.json").then(resp => {
              //@ts-ignore
              this.listData = resp.body.pageData;
              this.listData.forEach(({ name }) => {
                if (this.$options?.components) {
                  this.$options.components[`kh-${name}`] = createConfigModule({
                    name
                  });
                }
              });
            });
          }}
        >
          获取数据
        </a-button>
        {this.listData.map((v: SettingData, i: number) => {
          const componentsName = `kh-${v.name}`;
          return (
            <componentsName
              moduleData={v}
              on-item-change={(event: SettingData) => this.changeItem(event, i)}
            />
          );
        })}
      </div>
    );
  }
}

export default ConfigDemo;
