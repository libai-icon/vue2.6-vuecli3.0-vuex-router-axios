/**
 * 方法说明
 * @method api
 * @auther libai
 * @param {参数类型} 参数名 参数说明
 * @createTime 2019-05-23
 */
import api from '../index';
import urls from './urls';

const header = {};

export default {
    getCity(params) {
        return api.get(urls.city, params, header);
    }
};