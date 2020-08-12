import { Component, Prop, Vue } from "vue-property-decorator";

interface Item {
  url: string;
  id: string;
  name: string;
}

@Component
class ShowInfo extends Vue {
  @Prop() readonly showMsg!: string;
  @Prop({ default: (): Item[] => [] }) readonly sourceData!: Item[];

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
