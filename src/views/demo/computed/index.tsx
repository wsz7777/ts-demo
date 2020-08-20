import { Vue, Component } from "vue-property-decorator";

@Component
class Computed extends Vue {
  name = 'Prop'
  getName = 'getName'
  get newValue(){
    return this.getName
  }

  created() {
    console.log(this.$refs.com);
  }

  mounted() {
    console.log(this.$refs.ppp);
  }


  render() {
    return (
      <div class="about">
        <h1>Computed&生命周期 </h1>
        <p>在在Object options风格中，我们定义方法时，需要外套computed,默认值为get</p>
        <p>在class components风格中，我们把computed去掉，前面直接定义get 或者 set</p>
        <p ref='ppp'>在ts中同上</p>

        <div ref='com'>{this.newValue}</div>
      </div>
    );
  }
}

export default Computed;
