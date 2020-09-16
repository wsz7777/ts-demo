import { Component, Prop } from 'vue-property-decorator';
import * as tsc from 'vue-tsx-support';

interface ButtonClick {
  (value: string): void;
}

interface ButtonProps {
  text: string;
  clickEnd?: ButtonClick;
}

@Component
export default class ZButton extends tsc.Component<ButtonProps> {
  //#region show
  @Prop() text!: string;

  /** hbhjb */
  show = true;

  // clickEnd(value: string) {
  //   return value;
  // }
  /** tgfhg */
  public btnClick(value: boolean): void {
    console.log('value is: ', value);
    this.show = !this.show;
    this.$emit('clickEnd', value);
  }
  //#endregion

  protected render() {
    return (
      <div>
        {this.show && <div>查看显示隐藏</div>}
        <button onClick={() => this.btnClick(true)}>{this.text}</button>
      </div>
    );
  }
}
