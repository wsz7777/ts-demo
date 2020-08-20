
import { Vue, Component } from "vue-property-decorator";

@Component
class ComponentsDemo extends Vue{
  render(){
    return(
      <div>
        <h1>引入的组件</h1>
      </div>
    )
  }
}
export default ComponentsDemo;