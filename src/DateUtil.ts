export class DateUtil {

  /**
   * 转换为本地格式
   * @param date 时间
   */
  static toLocaleString(date: Date | number) {
    return new Date(date).toLocaleString();
  }

}
