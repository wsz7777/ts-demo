import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    "hello-world": () => import("@/components/HelloWorld")
  }
})
class Home extends Vue {
  name = "Home";

  render() {
    return (
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js App" />
      </div>
    );
  }
}

export default Home;
