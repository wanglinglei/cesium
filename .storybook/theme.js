// .storybook/theme.js
import { create } from 'storybook/internal/theming';

export default create({
  base: 'light', // 或 'dark'

  // 品牌配置
  brandTitle: 'Cesium Components',
  brandUrl: '/',
  brandImage: '', // 放在 public 目录下的 logo
  brandTarget: '_self',

  // 颜色配置
  colorPrimary: '#3EAF7C',
  colorSecondary: '#3EAF7C',

  // UI 配置
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,

  // 文字颜色
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // 工具栏
  barTextColor: '#999999',
  barSelectedColor: '#3EAF7C',
  barBg: '#f5f5f5',

  // 表单颜色
  inputBg: '#ffffff',
  inputBorder: '#e0e0e0',
  inputTextColor: '#333333',
  inputBorderRadius: 4,
});
