/**
 * 方法说明
 * @method 请求方法封装
 * @auther libai
 * @param {参数类型} 参数名 参数说明
 * @createTime 2019-05-23
 */
import axios from './axios';

let instance = axios();

export default {
    get(url, params, headers) {
        let options = {};

        if (params) {
            options.params = params;
        }
        if (headers) {
            options.headers = headers;
        }
        return instance.get(url, options);
    },
    post(url, params, headers, data) {
        let options = {};

        if (params) {
            options.params = params;
        }
        if (headers) {
            options.headers = headers;
        }
        return instance.post(url, data, options);
    },
    put(url, params, headers) {
        let options = {};

        if (headers) {
            options.headers = headers;
        }
        return instance.put(url, params, options);
    },
    delete(url, params, headers) {
        let options = {};

        if (params) {
            options.params = params;
        }
        if (headers) {
            options.headers = headers;
        }
        return instance.delete(url, options);
    }
};