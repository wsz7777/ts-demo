import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { Button } from "ant-design-vue";
Vue.use(Button)

/**接口interface示例 */
interface Item {
  url: string;
  id: string;
  name: string;
}

@Component
class ShowInfo extends Vue {
  /**prop示例 */
  @Prop() readonly showMsg!: string;
  @Prop({ default: (): Item[] => [] }) readonly sourceData!: Item[];

  obj={
    currentText:'这是示例内容',
    oldText:'这是原来的内容'
  }
  // currentText = '这是示例内容'

  // editText(){
  //   console.log(this.currentText)
  //   this.$emit('handleOkItem',this.currentText)
  // }

  /**emit子组件触发父组件 */
  @Emit()
  editText(){
    return `${this.obj.currentText}${Math.ceil(Math.random()*10)}`
  }

  render() {
    return (
      <div>
        <h1>{this.showMsg}</h1>
        <ul>
          {this.sourceData.map(v => (
            <li>
              <a href={v.url} target="_blank" rel="noopener">
                {v.id}.{v.name}
              </a>
            </li>
          ))}
        </ul>
        <a-button type="primary" on-click={this.editText}>
          修改h1文本内容
        </a-button>

      </div>
    );
  }
}

export default ShowInfo;
