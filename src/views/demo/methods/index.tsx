import { Vue, Component } from "vue-property-decorator";

@Component
class Methods extends Vue {
  name = 'Prop';


  //js的class components风格
  // onChange(){

  // }

  //ts中
  // onChange(val:any){

  // }

  
  render() {
    return (
      <div class="about">
        <h1>Methods</h1>
        <p>在在Object options风格中，我们定义方法时，需要外套methods</p>
        <p>在class components风格中，我们把methods去掉了，直接定义即可</p>
        <p>在ts中需要注意在函数形参之后应该用：后加形参的类型</p>
      </div>
    );
  }
}

export default Methods;
