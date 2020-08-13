import { Vue, Component } from "vue-property-decorator";
import Quill from "quill";

//@ts-ignore
import { ImageDrop } from "quill-image-drop-module";
//@ts-nocheck
import ImageResize from "@taoqf/quill-image-resize-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);
// //@ts-ignore
// import Quill from "quill/core";
// //@ts-ignore
// import Toolbar from "quill/modules/toolbar";
// //@ts-ignore
// import Snow from "quill/themes/snow";
// //@ts-ignore
// import Bold from "quill/formats/bold";
// //@ts-ignore
// import Italic from "quill/formats/italic";
// //@ts-ignore
// import Header from "quill/formats/header";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

// Quill.register({
//   "modules/toolbar": Toolbar,
//   "themes/snow": Snow,
//   "formats/bold": Bold,
//   "formats/italic": Italic,
//   "formats/header": Header
// });

@Component
class Text extends Vue {
  name = "Text";
  quill: null | Quill = null;

  $refs!: {
    edit: HTMLElement;
  };

  mounted() {
    this.quill = new Quill(this.$refs.edit, {
      theme: "snow",
      bounds: document.body,
      debug: "warn",
      modules: {
        imageDrop: true, //图片拖拽
        imageResize: {
          //放大缩小
          displaySize: true
        },
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          // [{ 'script': 'sub' }, { 'script': 'super' }],
          // [{ 'indent': '-1' }, { 'indent': '+1' }],
          // [{ 'direction': 'rtl' }],
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          // [{ 'font': [] }],
          [{ align: [] }],
          ["clean"],
          ["link", "image"]
        ]
      },
      placeholder: "书写你的内容",
      readOnly: false
    });
  }

  render() {
    return (
      <div>
        <h1>This is an text page</h1>
        <div ref="edit">
          <p>Hello World!</p>
          <p>
            Some initial <strong>bold</strong> text
          </p>
          <p>
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default Text;
