import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    "show-info": () => import("@/components/ShowInfo")
  }
})
class Example extends Vue {
  name = "Example";

  sourceData = [
    {
      id:'1',
      url:'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
      name: "babel"
    },
    {
      id:'2',
      url:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
      name: " typescript"
    },
    {
      id:'3',
      url:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
      name: "router"
    }
  ];

  render() {
    return (
      <div class="about">
        <show-info sourceData={this.sourceData} showMsg="This is an example page"/>
      </div>
    );
  }
}

export default Example;
