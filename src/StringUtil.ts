/**
 * Copyright: Copyright (C) 2018 Aomi Tech,All Rights Reserved
 */
export class StringUtil {
  /**
   * 去除前后空格
   * @param str 当前带有空格的字符串
   */
  static trim(str) {
    if (str) {
      return str.replace(/(^\s*)|(\s*$)/g, '');
    }
    return str;
  }

}
