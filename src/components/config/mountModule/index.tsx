import { Vue, Component, Model, Prop } from "vue-property-decorator";
import { ModuleData } from "@/components/config/configModule";
import lodash from 'lodash'
import S from "./index.module.scss";

interface ConfigModuleOptions {
  name: string;
  path?: string;
}

export function createConfigModule({ name }: ConfigModuleOptions) {
  @Component({
    components: {
      "mm-show": () => import(`@/components/config/${name}/show`),
      "mm-config": () => import(`@/components/config/${name}/config`)
    }
  })
  class MountModule extends Vue {
    name = "MountModule";
    // @Prop({ type: Object, default: () => ({ imgSrc: "" }) })
    @Prop({ type: String, default: "" })
    cmpIndex: string | undefined;

    @Model("item-change", { type: Object, default: () => ({ imgSrc: "" }) })
    readonly moduleData!: ModuleData;

    @Model("change-show", { type: String, default: "" })
    readonly showIndex: string | undefined;

    get moduleDataCopy() {
      // return { ...this.moduleData };
      return lodash.cloneDeep(this.moduleData)
    }

    render() {
      const compIndex = `${name}${this.cmpIndex}`;
      return (
        <div class={S.Box}>
          <div
            class={S.showBox}
            on-click={() => {
              this.$emit("change-show", compIndex);
            }}
          >
            <mm-show settingData={this.moduleDataCopy} />
          </div>
          
          {this.showIndex === compIndex && (
            <div class={S.configBox}>
              <mm-config
                editData={this.moduleDataCopy}
                on-update={(event: SettingData) => {
                  console.log("data", event);
                  this.$emit("item-change", event);
                }}
              />
              <div class={S.arrow}></div>
            </div>
          )}
        </div>
      );
    }
  }

  return MountModule;
}
