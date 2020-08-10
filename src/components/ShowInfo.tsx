import { Component, Prop, Vue } from "vue-property-decorator";

@Component
class ShowInfo extends Vue {
  @Prop() readonly showMsg!: string;
  @Prop({ default: () => [] }) readonly sourceData!: any[];

  render() {
    return (
      <div>
        <h1>{this.showMsg}</h1>
        <ul>
          {this.sourceData.map(v => (
            <li>
              <a href={v.url} target="_blank" rel="noopener">
              {v.id}.{v.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowInfo;
