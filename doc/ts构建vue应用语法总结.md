# ts构建vue应用相关语法

`Object options`组件风格转向`class components`风格

## options配置项

### Prop 

jsx组件传值prop Object结构

```javascript
{
  props:{
    showMsg:{
      type: String
    }
    sourceData: {
      type: Array,
      default: () => []
    }
  }
}
```

ts组件传值Prop @Prop

```javascript
	@Prop(String) readonly showMsg! : string
  @Prop({ default: () => [] }) readonly sourceData!: any[];
```

### data

js

```javascript
data(){
  return {
    isShow = false,
		userName = 'Jhone',
    userAge = 20
  }
}
```

Ts

```javascript 
isShow: boolean = false
userName: string = 'Jhone'
userAge: number = 20
age=20
```



### Methods

js

```javascript
methods: {
  renderCanvas(chart){
     chart.tooltip(false);
  }
}
```

ts

```javascript
 renderCanvas(chart: any){
 	 chart.tooltip(false);
 }
```



### Components组件引入改造

js组件引入

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

### watch

Js watch监听数据变化

```javascript
watch: {
  timeAmountRange:{
    handler:'onTimeAmountChange',
    immediate: true,
    deep: true
  }
}

methods: {
  onTimeAmountChange(val: any){
    console.log('hhhhh',val)
  }
}
```

ts @Watch

```javascript
  @Watch("timeAmountRange", { immediate: true, deep: true })
  onTimeAmountChange(val: any) {
    console.log('hhhhh',val)
  }
```

### computed

jsx computed计算属性

```javascript
computed: {
  //读取数据
  newValue(){
    return this.value
  }
}
```

ts 通过get读取数据

```javascript
get newValue(){
  return this.value
}
```

### 生命周期

js

```javascript
created(){
  
},
updated(){
  
},
mounted(){
  
},
```

Ts

```javascript
created(){
  
}

updated(){
  
}

mounted(){
  
}
```



## 非options配置项

### $emit

Js $emit

```javascript
itemChange(val) {
  this.$emit("handleOkItem", val)
}
```

ts

```javascript
itemChange(val:any) {
  this.$emit("handleOkItem", val)
}
```

ts使用装饰器 @Emit

```javascript
@Emit('handleOkItem')
itemChange(val:any){
  return val
}

补充传参内容，方式
```

### $refs

js

```javascript
this.$refs.eventForm.validate(valid=>{
  
})
```

ts 使用$refs需先提前声明

```javascript
//声明  
$refs!: {
    eventForm: any;
  };

this.$refs.eventForm.validate(valid=>{
  
})
```

## vuex

js

```javascript
//namespace命名空间

const BuryingPoint = namespace("buryingPoint");

//装饰器
@BuryingPoint.State buryingList;
@BuryingPoint.Mutation addBuryingEvent;
@BuryingPoint.Getter getBuryingList;

this.buryingList
this.addBuryingEvent(this.formBase)
this.getBuryingList

//非装饰器
this.$store.state.BuryingPoint.buryingList
this.$store.commit('BuryingPoint/addBuryingEvent',this.formBase)
this.$store.getters['BuryingPoint/getBuryingList']
```

ts装饰器

```javascript
const BuryingPoint = namespace("buryingPoint");

@BuryingPoint.State buryingList: any;
@BuryingPoint.Mutation addBuryingEvent: any;
@BuryingPoint.Getter getBuryingList: any;
```



## ts常用语法规范

类型

```javascript
//布尔
let isShow: boolean = false
//数值
let age: number = 10
//字符串
let name: string = 'John'
//任意值
let chart: any = null
//数组
let arr: any[] = ['1',2,'dd']
```

接口InterFace

```typescript
interface Item {
  id: string;
  name: string;
  status: string;
}

let search: Item={
  id:'1',
  name:'Anna',
  status:'01'
}

```

