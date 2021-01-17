// 全局组件配置
import form from './form/index';
// 添加install方法
const component = {
  install: function (Vue) {
    Vue.component("form-main", form);
  }
}
// 导出
export default component