import { Vue, Component } from "vue-property-decorator";
import { TitleModuleData } from "@/components/config/configModule";
// import { createConfigModule } from "@/components/config/mountModule";
// import { TitleModuleData } from "@/components/config/configModule";
import { createConfigModule } from "view-config";
import { Button } from "ant-design-vue";
import S from "./config-demo.module.scss";
Vue.use(Button);

@Component
class ConfigDemo extends Vue {
  name = "ConfigDemo";
  titleData: TitleModuleData[] = [];
  showIndex = "";
  changeItem1(itemData: TitleModuleData, index: number) {
    console.log("config-demo", itemData);
    this.titleData.splice(index, 1, itemData);
  }

  render() {
    return (
      <div class={S.configBox}>
        <div>
          <a-button
            on-click={() => {
              import("@/assets/data/titlePage.json").then(resp => {
                //@ts-ignore
                this.titleData = resp.body.pageData;
                this.titleData.forEach(({ name }) => {
                  if (this.$options.components) {
                    this.$options.components[`kh-${name}`] = createConfigModule(
                      {
                        name
                      }
                    );
                  }
                });
              });
            }}
          >
            get it
          </a-button>
        </div>
        <div class={S.phoneBox}>
          {this.titleData.map((v: TitleModuleData, i: number) => {
            const componentsName = `kh-${v.name}`;
            return (
              <componentsName
                moduleData={v}
                cmpIndex={i.toString()}
                showIndex={this.showIndex}
                on-item-change={(event: TitleModuleData) =>
                  this.changeItem1(event, i)
                }
                on-change-show={(index: string) => {
                  console.log("index", index);
                  this.showIndex = index;
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ConfigDemo;
