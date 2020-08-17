import { Vue, Component, Watch } from "vue-property-decorator";
import {namespace} from "vuex-class";


const ExampleData = namespace("example");

@Component({
  components: {
    "show-info": () => import("@/components/ShowInfo")
  }
})
class Example extends Vue {
  name = "Example";

  /** 获取vuex数据 */
  @ExampleData.State exampleData: any;

  // sourcesData = [
  //   {
  //     id: "1",
  //     url:
  //       "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
  //     name: "babel"
  //   },
  //   {
  //     id: "2",
  //     url:
  //       "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
  //     name: " typescript"
  //   },
  //   {
  //     id: "3",
  //     url:
  //       "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
  //     name: "router"
  //   }
  // ];
  sourceData = [];
  text = "This is an example page";

  /**生命$refs */
  $refs!: {
    content: HTMLElement;
  };

  /** 计算属性 读取数据 */
  get newText() {
    console.log("computedtext", this.text);
    return this.text;
  }

  /** watch监听数据 */
  @Watch("text", { immediate: true, deep: true })
  onTextChange(val: any) {
    console.log("watchtext", val);
  }

  editHText(val: any) {
    console.log("text", this.text);
    this.text = val;
  }

  mounted() {
    console.log('exampleData',this.exampleData)
    this.sourceData = this.exampleData
    console.log('ref',this.$refs.content)
    this.$refs.content.style.marginTop='30px'
    this.$refs.content.style.color = '#42b983'
  }

  render() {
    return (
      <div class="about">
        <show-info
          sourceData={this.sourceData}
          showMsg={this.newText}
          on-edit-text={this.editHText}
        />
        <div ref='content'>demo示例</div>
      </div>
    );
  }
}

export default Example;
