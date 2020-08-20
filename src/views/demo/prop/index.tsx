import { Vue, Component } from "vue-property-decorator";
import propDemo from './demo';

@Component({
  components :{
    'propDemo' : () => import('@/views/demo/prop/demo')
  }
})
class Prop extends Vue {
  name = 'Prop';

  change(){
    this.name = '子传父';
    console.log('111')
  }
  render() {
    return (
      <div class="about">
        <h1>Prop&父子传值</h1>
        <p>在jsx中，使用prop传值时，使用的格式为对象的方式，其中每个值中有type属性代表类型等</p>
        <p>在class components中使用prop传值时，可以使用@Prop(类型) [变量名]的方式</p>
        <propDemo data = {this.name} on-father = {this.change}></propDemo>
      </div>
    );
  }
}

export default Prop;
