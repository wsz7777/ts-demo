
export interface Style {
  [key: string]: string;
}

export interface ModuleData {
  name: string;
  type: string;
  title:string;
  data: any;
  style: any;
  options: any;
}
/*
 * @description 模块数据 */
export interface TitleModuleData extends ModuleData {
  data: TitleData;
  style: TitleStyle;
  options: TitleOptions;
}
export interface TitleData {
  leftIcon?: string;
  rightIcon?: string;
  content: string;
}
export interface TitleStyle {
  titleSty: Style;
  imgSty: Style;
  boxSty: Style;
}
export interface TitleOptions {
  
}
export interface TitleConfig {
  name: string;
  type: string;
  title: string;
  options: TitleConfigOptions[];
}
export interface TitleConfigOptions {
  optionName: string;
  optionType: string;
  defaultValue: string;
  label: string;
}
