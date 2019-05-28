/**
 * 方法说明
 * @method api入口文件
 * @auther libai
 * @param {参数类型} 参数名 参数说明
 * @createTime 2019-05-23
 */
import apiList from './apiList';

const install = function(Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    Object.defineProperties(Vue.prototype, {
        '$api': {
            get() {
                return apiList;
            }
        }
    });
};
// console.log(install)

export default {install};
