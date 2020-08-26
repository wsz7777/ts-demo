import { TitleConfig } from "./configModule";
export const titleConfig: TitleConfig = {
  name: "title",
  type: "title",
  title: "标题",
  options: [
    {
      optionName: "content",
      optionType: "text",
      defaultValue: "这是标题",
      label: "内容"
    },
    {
      optionName: "icon",
      optionType: "text",
      defaultValue: "",
      label: "图标"
    },
    {
      optionName: "font-size",
      optionType: "text",
      defaultValue: "12px",
      label: "字体大小"
    },
    {
      optionName: "font-weight",
      optionType: "text",
      defaultValue: "bold",
      label: "字体宽度"
    }
  ]
};
