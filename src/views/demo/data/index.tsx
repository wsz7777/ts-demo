import {Vue , Component, Watch} from 'vue-property-decorator';

@Component
class Data extends Vue{
  data = 123;
  @Watch('data',{immediate:true,deep:true})
  onDataChange(val: any){
    console.log('data变成了'+val);
  }

  change(){
    this.data = Math.round(Math.random()*100);
  }
  render(){
    return(
      <div>
        <h1>Data&监听</h1>
          <p>在Object options风格中，我们定义数据的方法是使用对像</p>
          <p>在class components风格中，我们可以直接对数据进行定义，例如name='liming'</p>
          <p>在Ts中，定义变量需要注意在变量后用"<strong>:</strong>"后加类型</p>
          <h3 onClick={this.change}>{this.data}</h3>
      </div>
    )
  }
}
export default Data;