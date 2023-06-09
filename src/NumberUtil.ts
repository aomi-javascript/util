/**
 * 数组工具类
 */
export class NumberUtil {

  /**
   * 转换字符串为整数
   * 如果值为NaN返回0
   * @param val A string to convert into a number.
   * @param radix A value between 2 and 36 that specifies the base of the number in numString. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
   */
  static parseInt(val: string, radix?: number) {
    const r = Number.parseInt(val, radix);
    return Number.isNaN(r) ? 0 : r;
  }

  /**
   * Converts a string to a floating-point number.
   * 如果值为NaN返回0
   * @param val A string that contains a floating-point number.
   */
  static parseFloat(val: string) {
    const r = Number.parseFloat(val);
    return Number.isNaN(r) ? 0 : r;
  }

}
