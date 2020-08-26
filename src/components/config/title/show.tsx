import { Vue, Component, Prop } from "vue-property-decorator";
import { TitleModuleData } from "@/components/config/configModule";
import S from "./title.module.scss";
@Component
class AShow extends Vue {
  name = "AShow";

  @Prop(Object)
  settingData!: TitleModuleData;

  render() {
    const { titleSty, imgSty, boxSty } = this.settingData.style;
    const { content, leftIcon,rightIcon } = this.settingData.data;
    return (
      <div class={S.box} style={boxSty}>
        {leftIcon && <img style={imgSty} src={leftIcon} />}
        <div style={titleSty}>{content}</div>
        {rightIcon && <img style={imgSty} src={rightIcon} />}
      </div>
    );
  }
}

export default AShow;
