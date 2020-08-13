import { Vue, Component } from "vue-property-decorator";

import "./app.scss";

@Component
class App extends Vue {
  name = "app";

  render() {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/example">Example</router-link>
        </div>
        <router-view />
      </div>
    );
  }
}

export default App;
