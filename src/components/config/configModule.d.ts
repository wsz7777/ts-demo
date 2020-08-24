export interface SettingData {
  [key: string]: string;
  imgSrc: string;
}
/*
 * @description 模块数据 */
export interface TitleModuleData {
  name:string;
  type: string;
  data: TitleData;
  style: TitleStyle[];
  options?: TitleOptions[];
}
export interface TitleData {
  icon?: string;
  content: string;
}
export interface TitleStyle {
  [key: string]: string|number;
  styleName: string;
  defaultValue: string | number;
}
export interface TitleOptions {
  optionName: string;
  defaultValue: string | number | boolean;
}
export interface TitleConfig{
  name:string;
  type:string;
  title:string;
  options:TitleConfigOptions[];
}
export interface TitleConfigOptions{
  optionName:string;
  optionType:string;
  defaultValue:string;
  label:string;
}