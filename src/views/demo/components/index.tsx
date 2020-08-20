
import { Vue, Component } from "vue-property-decorator";
import { component } from 'vue/types/umd';
import ComponentsDemo from './demo';

@Component({
  components:{
    ComponentsDemo : () => import('@/views/demo/components/demo')
  }
})
class Components extends Vue{
  render(){
    return(
      <div>
        <p>在引用组件时我们可以使用装饰器的方法进行引入</p>
        <ComponentsDemo></ComponentsDemo>
      </div>
    )
  }
}
export default Components;