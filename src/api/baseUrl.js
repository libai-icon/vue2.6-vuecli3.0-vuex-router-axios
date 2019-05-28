/**
 * 方法说明
 * @method 环境配置
 * @auther libai
 * @param {参数类型} 参数名 参数说明
 * @createTime 2019-05-23
 */
let baseUrl = '/api'; // 本地代理

switch (process.env.NODE_ENV) {
case 'dev':
    baseUrl = ''; // 测试环境url
    break;
case 'pre':
    baseUrl = ' ';// 预上线环境url
    break;
case 'production':
    baseUrl = ''; // 生产环境url
    break;
}

export default baseUrl;