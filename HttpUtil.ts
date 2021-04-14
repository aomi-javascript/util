/**
 * @author 田尘殇Sean(sean.snow@live.com)
 * @date 2017/5/23
 */

const URL_PATTERN = /(http|ftp|https):\/\/.*/;

/**
 * 判断是否是url
 * @param url url
 */
export function isUrl(url) {
  return URL_PATTERN.test(url);
}

/**
 * http query str 转换为对象
 * @param queryStr 查询字符串
 */
export function queryUrlToObj(queryStr) {
  let tmp = queryStr.replace(/&/g, '","');
  tmp = decodeURI(tmp.replace(new RegExp('=', 'g'), '":"'));
  if (tmp === '') {
    return {};
  }
  console.log(`{"${tmp}"}`);
  return JSON.parse(`{"${tmp}"}`);
}


/**
 * 获取url中的参数
 * @returns {{} | any}
 */
export function getQueryArgs() {
  return queryUrlToObj(location.search.substr(1));
}

export function queryToObjectWithUrl(url) {
  if (url.indexOf('?') === -1) {
    return {};
  }
  let tmp = url.substr(url.indexOf('?') + 1);
  return queryUrlToObj(tmp);
}

/**
 * 对象转换为url 字符串
 * @param {Object} params
 * @returns {String}
 */
export function urlArgs(params: Object): string {
  if (!params) {
    return '';
  }
  return Object.keys(params)
    .map(key => `${key}=${params[key] || (params[key] === 0 ? params[key] : '')}`)
    .join('&');
}


