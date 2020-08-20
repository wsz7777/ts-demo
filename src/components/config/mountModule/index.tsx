import { Vue, Component, Model } from "vue-property-decorator";
import { SettingData } from "@/components/config/configModule";
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
    @Model("item-change", { type: Object, default: () => ({ imgSrc: "" }) })
    readonly moduleData!: SettingData;

    get moduleDataCopy() {
      return { ...this.moduleData };
    }

    render() {
      return (
        <div class={S.Box}>
          <div class={S.showBox}>
            <mm-show settingData={this.moduleDataCopy} />
          </div>
          <div class={S.configBox}>
            <mm-config
              editData={this.moduleDataCopy}
              on-update={(event: SettingData) => {
                console.log("data", event);
                this.$emit("item-change", event);
              }}
            />
          </div>
        </div>
      );
    }
  }

  return MountModule;
}
