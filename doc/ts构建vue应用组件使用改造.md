# ts构建vue应用components组件改造

## components 组件传值Prop语法改造

jsx组件传值prop Object结构

```javascript
@Component({
  props:{
    showMsg:{
      type: String
    }
    sourceData: {
      type: Array,
      default: () => []
    }
  }
})
```

ts组件传值Prop @Prop

```javascript
class ShowInfo extends Vue {
  @Prop() readonly showMsg! : string
  @Prop({ default: () => [] }) readonly sourceData!: any[];
```

## Components组件引入改造

jsx组件引入

```javascript
const show-info = () => import("@/components/ShowInfo")
```

ts组件引入

```javascript
@Component({
  components: {
    "show-info": () => import("@/components/ShowInfo")
  }
})
```

