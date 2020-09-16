// views/Home.tsx
import { Component, Vue } from 'vue-property-decorator';
import { Component as tsc } from 'vue-tsx-support';
import ZButton from '@/components/Button.tsx';

// @Component
@Component
export default class HomeContainer extends tsc<Vue> {
  protected render() {
    return (
      <div>
        <p>1111</p>
        <ZButton
          text="点我！"
          on-clickEnd={(value: string) => {
            console.log(value);
          }}
        ></ZButton>
      </div>
    );
  }
}
