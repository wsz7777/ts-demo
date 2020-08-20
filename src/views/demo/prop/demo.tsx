import { Vue, Component ,Prop} from "vue-property-decorator";

@Component
class PropDemo extends Vue {
  father = 123;
  @Prop() readonly data !: string|number
  
  
  dataChange(val:any){
    this.$emit('father',val)
    console.log('123');
  }


  render() {
    return (
      <div class="about">
        <h3>PropDemo</h3>
        <p>传值{this.data}</p>
        <button onClick={this.dataChange}>emit</button>
      </div>
    );
  }
}

export default PropDemo;