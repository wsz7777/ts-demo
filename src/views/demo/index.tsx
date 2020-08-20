import { Vue, Component } from "vue-property-decorator";

@Component
class Demo extends Vue {

  render() {
    return (
      <div class="about">
        <h1>Ts构建Vue</h1>
        <router-link to="/demo/prop">prop</router-link>|
        <router-link to="/demo/data">data</router-link>|
        <router-link to="/demo/methods">methods</router-link>|
        <router-link to="/demo/components">components</router-link>|
        <router-link to="/demo/computed">components</router-link>
        <router-view />
      </div>
    );
  }
}

export default Demo;
