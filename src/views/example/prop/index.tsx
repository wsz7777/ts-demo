import { Vue, Component} from "vue-property-decorator";

@Component({
  components: {
    "show-info": () => import("@/components/ShowInfo")
  }
})
class Prop extends Vue {
  name = "Prop";

  text="propdemo"

  editHText(val: any) {
    console.log("text", this.text);
    this.text = val;
  }

  render() {
    return (
      <div>
        <show-info showMsg={this.text} on-edit-text={this.editHText}/>
      </div>
    )
  }
}

export default Prop;