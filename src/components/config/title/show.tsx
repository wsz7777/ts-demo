import { Vue, Component, Prop } from "vue-property-decorator";
import { TitleModuleData, TitleStyle } from "@/components/config/configModule";

@Component
class AShow extends Vue {
  name = "AShow";

  @Prop(Object)
  settingData!: TitleModuleData;

  get compStyle(){
    const styleList:string[]=[]
    this.settingData.style.forEach(v=>{
      styleList.push(`${v.styleName}:${v.defaultValue}`)
    })
    const style=styleList.join(";")
    return style
  }
  render() {
    return (
      <div class="AShow">
        <div style={this.compStyle}>{this.settingData.data.content}</div>
      </div>
    );
  }
}

export default AShow;
