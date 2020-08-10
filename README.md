[toc]

# 使用 vue-cli 搭建一个 ts 项目

## 创建项目

初始化一个项目

```bash
vue create ts-demo
```

选择自定义配置并进行选择

```
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```

回车进入漫长 npm 下载的等待~

## 配置文件修改

### 构建环境配置文件修改

增加配置文件

```
.env   生产环境打包的环境变量
.env.development  开发环境打包的环境变量
```

### 项目开发配置文件修改

主要修改增加 ts 类型支持

#### vue-router 钩子函数支持

在`src`目录下创建`config/hook.ts`文件和与之对应的`d.ts`类型描述文件

```typescript
// src/config/hook.ts
// class-component-hooks.js
import Component from "vue-class-component";

// Register the router hooks with their names
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
]);
```

```typescript
// src/config/hook.ts
import Vue from "vue";
import { Route, RawLocation } from "vue-router";

declare module "vue/types/vue" {
  // Augment component instance type
  interface Vue {
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void;

    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void;

    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void;
  }
}
```

增加完文件后在 `src/main.ts` 中的第一行增加

```typescript
import "@/config/hook";
```

#### vue class components 风格的类型支持

```typescript
// src/shims-tsx.d.ts 对照更改

import Vue, { VNode } from "vue";

export default abstract class TsxComponent<P> extends Vue {
  private placeholder: Readonly<{}> & Readonly<P>;
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface ElementAttributesProperty {
      placeholder: {};
    }
  }
}
```

`class componemts` 风格的支持除了需要类型系统支持还需要两个额外的包

##### `vue-class-component` & `vue-property-decorator`

```bash
npm i vue-class-component vue-property-decorator
```

这两个包前者支持 vue class 的创建组件的风格，后者提供了装饰符的支持，让 class 风格组件写起来更顺手

##### `vuex-class`

```bash
npm i vuex-class
```

`vue-property-decorator`只提供了`vue`内功能的装饰符，对于 vuex 并没有提供相应操作，所以这一功能由 `vuex-class` 来提供并支持

#### css module 的类型支持

```typescript
// src/shims-vue.d.ts 中添加

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
```

#### json 加载转换 js 对象支持

该部分加载需要两步，第一步先使得类型系统认识 json

```typescript
// src/shims-vue.d.ts 中添加
declare module "*.json" {
  const value: any;
  export default value;
}
```

第二步，让编辑器自动识别

```json
{
  "compilerOptions": {
    "resolveJsonModule": true // 添加这一句
  }
}
```

## class componemts 组件改造

本篇只涉及 demo 改造所以只有 4 个文件

```
src/components/HelloWorld.vue
src/views/About.vue
src/views/Home.vue
src/App.vue
```

## 创建后使用操作

### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Run your unit tests

```
npm run test:unit
```

#### Lints and fixes files

```
npm run lint
npm run lint --fix    // 按照lint进行修复
```
