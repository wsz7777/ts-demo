import { Vue, Component } from "vue-property-decorator";
import { SettingData,TitleModuleData } from "@/components/config/configModule";
import { createConfigModule} from "@/components/config/mountModule";
import { Button } from "ant-design-vue";
Vue.use(Button);

@Component
class ConfigDemo extends Vue {
  name = "ConfigDemo";
  listData: SettingData[] = [
    // { type: "", name: "a", imgSrc: "/favicon.ico" },
    // { type: "", name: "a", imgSrc: "/favicon.ico" }
  ];
  titleData:TitleModuleData[]=[];

  changeItem(itemData: SettingData, index: number) {
    console.log("config-demo", itemData);
    this.listData.splice(index, 1, itemData);
  }
  changeItem1(itemData: TitleModuleData, index: number) {
    console.log("config-demo", itemData);
    this.titleData.splice(index, 1, itemData);
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
        <a-button on-click={()=>{
          import("@/assets/data/titlePage.json").then(resp=>{
            //@ts-ignore
            this.titleData=resp.body.pageData;
            this.titleData.forEach(({name})=>{
              if(this.$options.components){
                this.$options.components[`kh-${name}`] = createConfigModule({
                  name
                });
              }
            })
          })
        }}>  get  it</a-button>
        {this.listData.map((v: SettingData, i: number) => {
          const componentsName = `kh-${v.name}`;
          return (
            <componentsName
              moduleData={v}
              on-item-change={(event: SettingData) => this.changeItem(event, i)}
            />
          );
        })}
        {this.titleData.map((v: TitleModuleData, i: number) => {
          const componentsName = `kh-${v.name}`;
          return (
            <componentsName
              moduleData={v}
              on-item-change={(event: TitleModuleData) => this.changeItem1(event, i)}
            />
          );
        })}
      </div>
    );
  }
}

export default ConfigDemo;