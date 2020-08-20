declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// scss支持
declare module "*.scss";

declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}

// less支持
declare module "*.less";

declare module "*.module.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}
